import { notFound } from 'next/navigation';
import TerapiaIndividualPage from '../terapia-individual/page';
import TerapiaDeCasalPage from '../terapia-de-casal/page';
import AvaliacaoNeuropsicologicaPage from '../avaliacao-neuropsicologica/page';

export async function generateStaticParams() {
  return [
    { slug: 'terapia-individual' },
    { slug: 'terapia-de-casal' },
    { slug: 'avaliacao-neuropsicologica' },
  ];
}

// This is a dynamic route handler component that will render the correct page
// based on the slug. This pattern avoids duplicating layout code.
export default function ServicoSlugPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  if (slug === 'terapia-individual') {
    return <TerapiaIndividualPage />;
  }

  if (slug === 'terapia-de-casal') {
    return <TerapiaDeCasalPage />;
  }

  if (slug === 'avaliacao-neuropsicologica') {
    return <AvaliacaoNeuropsicologicaPage />;
  }

  // If the slug doesn't match any of the known service pages, show a 404 page.
  notFound();
}
