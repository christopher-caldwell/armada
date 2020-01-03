// removing unique upgrades from list in case ship is deleted with uniques equipped
export const removeUniqueUpgradesFromShip = (shipToBeRemoved, dispatch) => {
  Object.values(shipToBeRemoved.upgrades).forEach(upgrade => {
    if(upgrade.unique){
      const upgradeTitle = upgrade.title
      const action = 'remove'
      dispatch('fleet/trackUniqueUpgrades', { upgradeTitle, action }, { root: true })
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