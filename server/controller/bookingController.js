import Show from "../models/show.js"


//function to check availability of selected seats for a movie
const checkSeatsAvailabilty = async (showId, selectedSeats) => {
    try {
       const showData = await Show.findById(showId)
       if(!showData) return false;

       const occupiedSeats = showData.occupiedSeats;

       const isAnySeatTaken = selectedSeats.some(seat => occupiedSeats[seat]);
       return !isAnySeatTaken;

    } catch (error) {
        console.error(error)
       return false;
    }
}

export const createBooking = async(req, res)=> {
try {
    const [userId] = req.auth();
    const {showId, selectedSeats} = req.body;
    const {origin} = req.headers;

    //check if the seat is available for the selected show
    const isAvailable = await checkSeatsAvailability(showId, selectedSeats)

    if(!isAvailable){
        return res.json({success:false, message: "selected Seats are not available."})
    }
} catch (error) {
    
}
}