export const SEO_CITIES = [
  { id: 'casablanca', name: 'Casablanca', focus: 'Hub Financier et Sièges Sociaux' },
  { id: 'rabat', name: 'Rabat', focus: 'Technologies et Institutions' },
  { id: 'tanger', name: 'Tanger', focus: 'Industrie et Logistique Mondiale' },
  { id: 'marrakech', name: 'Marrakech', focus: 'Tourisme et Événementiel de Luxe' },
  { id: 'agadir', name: 'Agadir', focus: 'Pôle Balnéaire et Halieutique' },
  { id: 'fes', name: 'Fès', focus: 'Agro-industrie et Offshoring' },
  { id: 'meknes', name: 'Meknès', focus: 'Industrie Agricole' },
  { id: 'kenitra', name: 'Kénitra', focus: 'Automobile et Industrie Lourde' },
  { id: 'dakhla', name: 'Dakhla', focus: 'Énergies Renouvelables et Tourisme' },
  { id: 'laayoune', name: 'Laâyoune', focus: 'Développement Régional' },
];

export const SEO_SECTORS = [
  { id: 'finance-banque', name: 'Finance & Banque' },
  { id: 'it-digital', name: 'IT & Digital' },
  { id: 'industrie-automobile', name: 'Industrie Automobile' },
  { id: 'hotellerie-luxe', name: 'Hôtellerie de Luxe' },
  { id: 'logistique-supply-chain', name: 'Logistique & Supply Chain' },
  { id: 'sante-pharma', name: 'Santé & Pharma' },
  { id: 'immobilier-construction', name: 'Immobilier & Construction' },
  { id: 'retail-distribution', name: 'Retail & Grande Distribution' },
  { id: 'energies-renouvelables', name: 'Énergies Renouvelables' },
  { id: 'aeronautique', name: 'Aéronautique' },
];

export const SEO_ROLES = [
  { id: 'directeur-general', name: 'Directeur Général (CEO)' },
  { id: 'directeur-financier', name: 'Directeur Financier (CFO)' },
  { id: 'directeur-ressources-humaines', name: 'Directeur des Ressources Humaines (DRH)' },
  { id: 'directeur-systemes-information', name: 'Directeur des Systèmes d\'Information (DSI)' },
  { id: 'directeur-commercial', name: 'Directeur Commercial' },
  { id: 'directeur-marketing', name: 'Directeur Marketing (CMO)' },
  { id: 'directeur-operations', name: 'Directeur des Opérations (COO)' },
  { id: 'directeur-usine', name: 'Directeur d\'Usine' },
  { id: 'directeur-hotel', name: 'Directeur d\'Hôtel' },
  { id: 'c-level-executive', name: 'C-Level Executive' },
];

export function generateAllCombinations() {
  const combinations = [];
  for (const role of SEO_ROLES) {
    for (const sector of SEO_SECTORS) {
      for (const city of SEO_CITIES) {
        // Slug pattern: recrutement-[role]-[secteur]-[ville]
        const slug = `recrutement-${role.id}-${sector.id}-${city.id}`;
        combinations.push({
          slug,
          role,
          sector,
          city
        });
      }
    }
  }
  return combinations;
}

export function getCombinationFromSlug(slug: string) {
  const all = generateAllCombinations();
  return all.find(c => c.slug === slug);
}
