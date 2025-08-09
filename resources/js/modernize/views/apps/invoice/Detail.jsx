import React from 'react';
import Breadcrumb from '@modernize/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '@modernize/components/container/PageContainer';
import { InvoiceProvider } from '@modernize/context/InvoiceContext/index';
import InvoiceDetail from '@modernize/components/apps/invoice/Invoice-detail/index';
import BlankCard from '@modernize/components/shared/BlankCard';
import { CardContent } from '@mui/material';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Invoice Details',
  },
];

const InvoiceDetailPage = () => {
  return (
    <InvoiceProvider>
      <PageContainer title="Invoice Detail" description="this is Invoice Detail">
        <Breadcrumb title="Invoice Detail" items={BCrumb} />
        <BlankCard>
          <CardContent>
            <InvoiceDetail />
          </CardContent>
        </BlankCard>
      </PageContainer>
    </InvoiceProvider>
  );
};
export default InvoiceDetailPage;
