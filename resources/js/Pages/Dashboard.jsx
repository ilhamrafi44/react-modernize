import ModernizeLayout from '@/Layouts/ModernizeLayout'

// swap these with real components from the template
import WelcomeCard from '@modernize/components/WelcomeCard'
import RevenueChart from '@modernize/components/charts/RevenueChart'

export default function Dashboard() {
  return (
    <ModernizeLayout>
      <div style={{ display: 'grid', gap: 24, gridTemplateColumns: '1fr 1fr' }}>
        <WelcomeCard title="Welcome!" subtitle="Laravel 12 + Inertia + Modernize" />
        <RevenueChart />
      </div>
    </ModernizeLayout>
  )
}
