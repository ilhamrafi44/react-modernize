import React from 'react';
import Breadcrumb from '@modernize/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '@modernize/components/container/PageContainer';
import EditInvoicePage from '@modernize/components/apps/invoice/Edit-invoice/index';
import { InvoiceProvider } from '@modernize/context/InvoiceContext/index';
import BlankCard from '@modernize/components/shared/BlankCard';
import { CardContent } from '@mui/material';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Invoice Edit',
  },
];

const InvoiceEdit = () => {
  return (
    <InvoiceProvider>
      <PageContainer title="Edit Invoice" description="this is Edit Invoice">
        <Breadcrumb title="Edit Invoice" items={BCrumb} />
        <BlankCard>
          <CardContent>
            <EditInvoicePage />
          </CardContent>
        </BlankCard>
      </PageContainer>
    </InvoiceProvider>
  );
};

export default InvoiceEdit;
