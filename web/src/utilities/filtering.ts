export const filterShips = (originalSet, filterTerm) => {
  if(filterTerm === '') return originalSet
  return originalSet.filter(shipObject => shipObject.title.toLowerCase().includes(filterTerm))
}