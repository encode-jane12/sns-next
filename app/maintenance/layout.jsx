import './maintenance.css';

export const metadata = {
  title: 'Under Scheduled Maintenance | SNS Construction',
  description:
    'SNS Construction official website is currently undergoing scheduled platform upgrades. Our digital services and client portal will be restored shortly.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenanceLayout({ children }) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof document !== 'undefined') {
              document.documentElement.classList.add('is-maintenance');
              if (document.body) document.body.classList.add('is-maintenance');
            }
          `,
        }}
      />
      <div className="maintenance-root">{children}</div>
    </>
  );
}
