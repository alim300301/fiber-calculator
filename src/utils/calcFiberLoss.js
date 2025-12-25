export const calcTotalLoss = (fiberKm, lossPerKm, connectorLoss, splitterLoss) => {
    return fiberKm * lossPerKm + connectorLoss + splitterLoss;
};
