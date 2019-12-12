export const filterShips = (originalSet, filterTerm) => {
  if(filterTerm === '') return originalSet
  console.log('working', filterTerm)
  const filteredShips = []
  originalSet.forEach(shipObject => {
    Object.values(shipObject).forEach(individualShipValue => {
      if(individualShipValue.contains(filterTerm)){
        filteredShips.push(shipObject)
      }
    })
  })
  return filteredShips
}