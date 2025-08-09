import Breadcrumb from '@modernize/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '@modernize/components/container/PageContainer';
import ReactBasicTables from '@modernize/components/react-tables/basic/page';


const BCrumb = [
    {
        to: '/',
        title: 'Home',
    },
    {
        title: ' React Basic Table',
    },
];


function page() {
    return (
        <>
            <PageContainer title="React Basic Table" description="this is React  Basic Table page">
                <Breadcrumb title="React Basic Table" items={BCrumb} />
                <div>
                    <ReactBasicTables />
                </div>
            </PageContainer>
        </>
    )
}

export default page
