import Breadcrumb from '@modernize/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '@modernize/components/container/PageContainer';
import Editable from "src/components/react-tables/editable/page";


const BCrumb = [
    {
        to: "/",
        title: "Home",
    },
    {
        title: "Editable Table",
    },
];
function page() {
    return (
        <>
            <PageContainer title="React Editable Table" description="this is React Editable Table page">
                <Breadcrumb title="Editable Table " items={BCrumb} />
                <Editable />
            </PageContainer>
        </>
    );
}

export default page;
