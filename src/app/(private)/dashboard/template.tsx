import { DashboardLayout } from "@toolpad/core/DashboardLayout";

type DashboardTemplateProps = {
    children: React.ReactNode;
};

export default function DashboardTemplate({ children }: DashboardTemplateProps){
    return(
        <DashboardLayout>
            { children }
        </DashboardLayout>
    );
}