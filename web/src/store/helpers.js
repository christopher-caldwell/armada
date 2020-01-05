export const removeUniqueUpgradeFromList = (upgrade, dispatch) => {
  const upgradeTitle = upgrade.title
  const points = upgrade.points
  const action = 'remove'
  dispatch('fleet/trackUniqueUpgrades', { upgradeTitle, action }, { root: true })
  dispatch('fleet/updateFleetPoints', { points, action: 'remove'}, {root: true})
  if(upgrade.set === 'commander'){
    dispatch('fleet/updateCommanderStatus', {}, {root: true})
  }
}

// removing unique upgrades from list in case ship is deleted with uniques equipped
export const removeUpgradesFromShip = (shipToBeRemoved, dispatch) => {
  Object.values(shipToBeRemoved.upgrades).forEach(upgrade => {
    if(upgrade){
      const points = upgrade.points
      upgrade.unique
      ? removeUniqueUpgradeFromList(upgrade, dispatch)
      : dispatch('fleet/updateFleetPoints', { points, action: 'remove'}, {root: true})
    }
  })
}

export const determineExtraActionForUpgrade = (dispatch, upgradeToBeAdded) => {
  if (upgradeToBeAdded.unique){
    const upgradeTitle = upgradeToBeAdded.title
    dispatch('fleet/trackUniqueUpgrades', { upgradeTitle, action: 'add'}, {root: true})
  }
  dispatch('fleet/addToFleetNotifications', {}, {root: true})
  if(upgradeToBeAdded.set === 'commander'){
    dispatch('fleet/updateCommanderStatus', {}, {root: true})
  }
}