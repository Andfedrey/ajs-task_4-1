export default function getStatHealh({ health }) {
  if (health > 50) { return 'healty'; }
  if (health <= 50 && health >= 15) { return 'wounded'; }
  if (health < 15) { return 'critical'; }
}
