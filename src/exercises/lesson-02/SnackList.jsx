export default function SnackList() {
  const snacks = [
    { name: 'Carrots', rank: 5 },
    { name: 'Celery sticks', rank: 3 },
    { name: 'Cookies', rank: 1 },
    { name: 'Popcorn', rank: 2 },
    { name: 'Apple slices', rank: 4 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {sortedSnacks.map((snack) => (
        <li key={snack.name}>
          {snack.name} - Rank #{snack.rank}
        </li>
      ))}
    </ol>
  );
}
