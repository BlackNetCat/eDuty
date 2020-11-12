const dutiesLoaded = (newDuties) => {
    return {
        type: 'DUTIES_LOADED',
        payload: newDuties
    };
};

export {
    dutiesLoaded
};