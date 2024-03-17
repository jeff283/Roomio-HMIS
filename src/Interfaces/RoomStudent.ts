import Room from "./Room";
import Student from "./Student";

interface RoomStudent{
    room: Room;
    occupants: Student[];
}

export default RoomStudent;