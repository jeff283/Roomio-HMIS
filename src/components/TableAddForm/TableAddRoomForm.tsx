import { useForm, FieldValues } from "react-hook-form";
import "./TableAddForm.css";
import Room from "../../Interfaces/Room";

interface Props {
  roomData?: Room;
  onFormSubmit: (room: Room) => void;
  onOffClick: () => void;
}

const emptyRoomData: Room = {
  id: "",
  roomType: "",
  capacity: 0,
  size: 0,
  bedType: "",
  gender: "",
  price: 0,
};
const TableAddRoomForm = ({
  onOffClick,
  onFormSubmit,
  roomData = emptyRoomData,
}: Props) => {
  const { register, handleSubmit, reset } = useForm();

  const singleRoom: Room = {
    roomType: "single",
    capacity: 1,
    size: 15,
    bedType: "single",
    gender: "male",
    price: 20000,
    occupants: [],
  };

  const doubleRoom: Room = {
    roomType: "double",
    capacity: 2,
    size: 10,
    bedType: "double",
    gender: "male",
    price: 12000,
    occupants: [],
  };

  const quadRoom: Room = {
    roomType: "quad",
    capacity: 4,
    size: 13,
    bedType: "bunker",
    gender: "male",
    price: 6000,
    occupants: [],
  };

  const onSubmit = (data: FieldValues) => {
    const selectedRoomType = data.roomType;
    const selectedGender = data.gender;
    // const roomTemplateData: Room = {
    //   roomType: data.roomType,
    //   capacity: parseInt(data.capacity),
    //   size: parseInt(data.size),
    //   bedType: data.bedType,
    //   gender: data.gender,
    //   price: parseInt(data.price),
    // };

    const updateRoomData = Object.keys(roomData).length;
    let roomDataFull: Room = {} as Room;
    if (updateRoomData != 0) {
      if (selectedRoomType === "single") {
        roomDataFull = {
          ...singleRoom,
          gender: selectedGender,
          occupants: roomData?.occupants || [],
          id: roomData.id,
        };
        onFormSubmit(roomDataFull);
      } else if (selectedRoomType === "double") {
        roomDataFull = {
          ...doubleRoom,
          gender: selectedGender,
          occupants: roomData?.occupants || [],
          id: roomData.id,
        };
        onFormSubmit(roomDataFull);
      } else if (selectedRoomType === "quad") {
        roomDataFull = {
          ...quadRoom,
          gender: selectedGender,
          occupants: roomData?.occupants || [],
          id: roomData.id,
        };
        onFormSubmit(roomDataFull);
      }
    } else {
      if (selectedRoomType === "single") {
        roomDataFull = singleRoom;
        onFormSubmit(roomDataFull);
      } else if (selectedRoomType === "double") {
        roomDataFull = doubleRoom;
        onFormSubmit(roomDataFull);
      } else if (selectedRoomType === "quad") {
        roomDataFull = quadRoom;
        onFormSubmit(roomDataFull);
      }
    }

    // console.log(roomDataFull);
    reset(data);
  };
  return (
    <div>
      <div className="table-add-form-container">
        <div onDoubleClick={onOffClick} className="off-click"></div>
        <form onSubmit={handleSubmit(onSubmit)} className="table-add-form">
          <div className="mb-3">
            <label className="form-label" htmlFor="type">
              Room Type
            </label>
            <select
              {...register("roomType")}
              id="roomType"
              className="form-select"
            >
              <option value=""></option>
              <option value="single" selected={roomData.roomType == "single"}>
                Single
              </option>
              <option value="double" selected={roomData.roomType == "double"}>
                Double
              </option>
              <option value="quad" selected={roomData.roomType == "quad"}>
                Quad
              </option>
            </select>
            {/* <input
              {...register("roomType")}
              value={roomData.roomType}
              id="roomType"
              className="form-control"
              type="text"
              required
            /> */}
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="gender">
              Gender
            </label>
            <select {...register("gender")} id="gender" className="form-select">
              <option value=""></option>
              <option value="male" selected={roomData.gender == "male"}>
                Male
              </option>
              <option value="female" selected={roomData.gender == "female"}>
                Female
              </option>
            </select>
          </div>
          <div className="form-submit">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TableAddRoomForm;
