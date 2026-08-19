export const messages = [
  'Cada tulipa representa um pedacinho da alegria que você leva para as pessoas.',
  'Que os seus 18 anos sejam o começo de uma fase linda e inesquecível.',
  'Nunca deixe de ser essa pessoa especial, doce e cheia de luz.',
  'Que nunca faltem motivos para sorrir, sonhar e acreditar em você.',
  'Você merece um jardim inteiro de momentos felizes.',
  'Feliz aniversário, Haysla! Hoje o dia floresceu especialmente para você.',
]
export const wishes = ['Coragem', 'Amor', 'Saúde', 'Alegria', 'Amizades verdadeiras', 'Novas aventuras', 'Paz', 'Confiança', 'Sonhos realizados', 'Boas surpresas', 'Liberdade', 'Sabedoria', 'Risadas', 'Conquistas', 'Inspiração', 'Esperança', 'Momentos inesquecíveis', 'Um aniversário perfeito']
export const tulips = [
  [11, 15], [31, 11], [55, 16], [78, 10], [91, 25], [17, 35], [43, 31], [68, 36], [84, 46],
  [8, 60], [28, 55], [52, 51], [74, 62], [93, 68], [18, 81], [40, 73], [62, 86], [84, 84],
] as const

type Point = { x: number; y: number }

export function findTulipsOnPath(from: Point, to: Point, collected: number[], bounds = { width: 1000, height: 600 }, radius = 46) {
  const start = { x: from.x / 100 * bounds.width, y: from.y / 100 * bounds.height }
  const end = { x: to.x / 100 * bounds.width, y: to.y / 100 * bounds.height }
  const dx = end.x - start.x
  const dy = end.y - start.y
  const lengthSquared = dx * dx + dy * dy

  return tulips.flatMap(([percentX, percentY], index) => {
    if (collected.includes(index)) return []
    const x = percentX / 100 * bounds.width
    const y = percentY / 100 * bounds.height
    const progress = lengthSquared === 0 ? 0 : Math.max(0, Math.min(1, ((x - start.x) * dx + (y - start.y) * dy) / lengthSquared))
    const nearestX = start.x + progress * dx
    const nearestY = start.y + progress * dy
    return Math.hypot(x - nearestX, y - nearestY) <= radius ? [{ index, progress }] : []
  }).sort((a,b) => a.progress - b.progress).map(hit => hit.index)
}
