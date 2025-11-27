import UseCasesShowcase from '@/components/UseCasesShowcase';

export default function ShowcaseDemoPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Product Showcase Demo</h1>
        <p className="text-slate-600">Scroll down to see the interaction</p>
      </div>

      <UseCasesShowcase />

      <div className="py-20 text-center bg-slate-100 mt-20">
        <p className="text-slate-500">End of showcase section</p>
      </div>
    </main>
  );
}
