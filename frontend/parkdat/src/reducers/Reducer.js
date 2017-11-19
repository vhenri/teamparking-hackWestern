const initialState = {
    sensorData: [],
    sensorDataWithID: [],
    ownerData: [],
    customerPostData: [],
    ownerPostData: [],
    ownerDataWithID: [],
    customerDataWithID: [],
    customerToSensorData: [],
    releaseSensorData: [],
    availableParkingSpotData: []
}

// All entries must be paired with a "UPDATE_XXXX" action.
// the actual reason for this is unclear and complex, but it's a necessary
// action.
export default function actionsReducer(state = initialState, action) {

    switch (action.type) {

        // /sensor GET
        case 'UPDATE_SENSOR':
            return{
                ...state,
                sensorData: action.payload
            }
        case 'GET_SENSOR_DATA':
            return {
                ...state
            }

        // /sensor/<id> GET
        case 'GET_SENSOR_DATA_WITH_ID':
            return {
                ...state
            }
        case 'UPDATE_SENSOR_DATA_WITH_ID':
            return {
                ...state,
                sensorDataWithID: action.payload
            }

        // /owner GET
        case 'UPDATE_OWNER':
            return {
                ...state,
                ownerData: action.payload
            }
        case 'GET_OWNER_DATA':
            return {
                ...state
            }

        // /customer POST
        case 'POST_CUSTOMER_DATA':
            return {
                ...state
            }
        case 'UPDATE_CUSTOMER_DATA':
            return {
                ...state,
                customerPostData: action.payload
            }

        // /owner POST
        case 'POST_OWNER_DATA':
            return {
                ...state
            }
        case 'UPDATE_OWNER_POST_DATA':
            return {
                ...state,
                ownerPostData: action.payload
            }

        // /owner/<id> GET
        case 'GET_OWNER_DATA_WITH_ID':
            return {
                ...state
            }
        case 'UPDATE_OWNER_DATA_WITH_ID':
            return {
                ...state,
                ownerDataWithID: action.payload
            }

        // /customer/<id> GET
        case 'GET_CUSTOMER_DATA_WITH_ID':
            return {
                ...state
            }
        case 'UPDATE_CUSTOMER_DATA_WITH_ID':
            return {
                ...state,
                customerDataWithID: action.payload
            }

        // /assign/<customer_id>/<sensor_id> POST
        case 'ASSIGN_CUSTOMER_TO_SENSOR':
            return {
                ...state
            }
        case 'UPDATE_CUSTOMER_TO_SENSOR':
            return {
                ...state,
                customerToSensorData: action.payload
            }

        // /release/<sensor_id> POST
        case 'RELEASE_SENSOR_ASSIGNMENT':
            return {
                ...state
            }
        case 'UPDATE_SENSOR_ASSIGNMENT':
            return {
                ...state,
                releaseSensorData: action.payload
            }

        default: {
            return state
        }

        // /available-parking-spots-near?lat=x&lng=y
        case 'AVAILABLE_PARKING_SPOTS':
            return {
                ...state
            }
        case 'UPDATE_AVAILABLE_PARKING_SPOTS':
            return {
                ...state,
                availableParkingSpotData: action.payload
            }
    }
}