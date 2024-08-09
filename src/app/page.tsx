import Button from '@/components/Button';

export default function Home() {
  return (
    <div className="pt-24 px-6 flex-col">
      <h1 className="font-bold text-textBrand text-2xl mb-4 text-center">
        Hi, Taylor
      </h1>
      <p className="mb-12">
        You have 6 medical bills ready from ABC Health System. You can pay your
        bills here or verify your identity to view full bill details.
      </p>
      <div className="mb-6 flex justify-between">
        <span className="text-textSecondary font-bold">Total due</span>
        <span className="text-textBrand font-bold text-2xl">$600.00</span>
      </div>
      <Button
        kind="link"
        href="/payment-information"
        title="Pay total"
      />
    </div>
  );
}
