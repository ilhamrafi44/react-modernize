// resources/js/Pages/Dashboard.jsx
import React from 'react'
import ModernizeLayout from '@/Layouts/ModernizeLayout'
import { Box, Grid } from '@mui/material'

import TopCards from '@modernize/components/dashboards/modern/TopCards'
import RevenueUpdates from '@modernize/components/dashboards/modern/RevenueUpdates'
import YearlyBreakup from '@modernize/components/dashboards/modern/YearlyBreakup'
import MonthlyEarnings from '@modernize/components/dashboards/modern/MonthlyEarnings'
import EmployeeSalary from '@modernize/components/dashboards/modern/EmployeeSalary'
import Customers from '@modernize/components/dashboards/modern/Customers'
import Projects from '@modernize/components/dashboards/modern/Projects'
import Social from '@modernize/components/dashboards/modern/Social'
import SellingProducts from '@modernize/components/dashboards/modern/SellingProducts'
import WeeklyStats from '@modernize/components/dashboards/modern/WeeklyStats'
import TopPerformers from '@modernize/components/dashboards/modern/TopPerformers'
import Welcome from '@modernize/layouts/full/shared/welcome/Welcome'

export default function Dashboard() {
  return (
    <ModernizeLayout>
      <Box>
        <Grid container spacing={3}>
          {/* column */}
          <Grid item sm={12} lg={12}>
            <TopCards />
          </Grid>

          {/* column */}
          <Grid item xs={12} lg={8}>
            <RevenueUpdates />
          </Grid>

          {/* column */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} lg={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12} sm={6} lg={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>

          {/* column */}
          <Grid item xs={12} lg={4}>
            <EmployeeSalary />
          </Grid>

          {/* column */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Customers />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Projects />
              </Grid>
              <Grid item xs={12}>
                <Social />
              </Grid>
            </Grid>
          </Grid>

          {/* column */}
          <Grid item xs={12} lg={4}>
            <SellingProducts />
          </Grid>

          {/* column */}
          <Grid item xs={12} lg={4}>
            <WeeklyStats />
          </Grid>

          {/* column */}
          <Grid item xs={12} lg={8}>
            <TopPerformers />
          </Grid>
        </Grid>

        {/* column */}
        <Welcome />
      </Box>
    </ModernizeLayout>
  )
}
