'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { getConsignmentById } from '@/src/data/consignments';
import TrackingView from './TrackingView';
import SearchPortal from './SearchPortal';

export default function ShippingContainer({ initialTrackingId = '' }) {
  const searchParams = useSearchParams();
  const urlId = searchParams ? searchParams.get('id') || searchParams.get('tracking') || searchParams.get('awb') || '' : '';

  const activeId = initialTrackingId || urlId || '';

  const [currentId, setCurrentId] = useState(activeId);
  const [notFoundId, setNotFoundId] = useState('');

  // Sync if URL query changes
  useEffect(() => {
    if (activeId && activeId !== currentId) {
      setCurrentId(activeId);
    }
  }, [activeId]);

  const handleSearch = (newId) => {
    if (!newId || !newId.trim()) {
      setCurrentId('');
      setNotFoundId('');
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        url.searchParams.delete('id');
        url.searchParams.delete('tracking');
        url.searchParams.delete('awb');
        window.history.pushState({}, '', url.pathname);
      }
      return;
    }

    const trimmed = newId.trim();
    const found = getConsignmentById(trimmed);

    if (found) {
      setCurrentId(found.id);
      setNotFoundId('');
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        url.searchParams.set('id', found.id);
        window.history.pushState({}, '', url.toString());
      }
    } else {
      setNotFoundId(trimmed);
      setCurrentId('');
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        url.searchParams.delete('id');
        window.history.pushState({}, '', url.pathname);
      }
    }
  };

  const consignment = getConsignmentById(currentId);

  if (consignment) {
    return (
      <TrackingView
        consignment={consignment}
        onSearchAnother={(newId) => handleSearch(newId)}
      />
    );
  }

  return (
    <SearchPortal
      onSearch={(id) => handleSearch(id)}
      notFoundId={notFoundId}
      onClearNotFound={() => setNotFoundId('')}
    />
  );
}
