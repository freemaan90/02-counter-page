import { WidgetGrid } from "@/app/components/dashboard/WidgetGrid";

export const metadata = {
 title: 'Admin Dashboard',
 description: 'Admin Dashboard',
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mr-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Informacion General</span>
      <WidgetGrid />
    </div>
  )
}
