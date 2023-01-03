import { combineReducers } from 'redux';

const packagesstatus = (packagesstatus  =  [], action) => {
    switch (action.type) {
        case "UPDATE_STATUS":
            let filterpackages = packagesstatus.filter((item) => item.heading !== action.payload.heading)
            if(filterpackages.length == packagesstatus.length){
                return [...packagesstatus,{...action.payload}];
            }
            else {
                return [...filterpackages]
            }

        default:
            return packagesstatus;
    }
};

export const Packagesstatus = combineReducers({
    packagesstatus,
});
