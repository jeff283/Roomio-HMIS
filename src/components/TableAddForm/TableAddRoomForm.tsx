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

  const onSubmit = (data: FieldValues) => {
    const roomTemplateData: Room = {
      roomType: data.roomType,
      capacity: parseInt(data.capacity),
      size: parseInt(data.size),
      bedType: data.bedType,
      gender: data.gender,
      price: parseInt(data.price),
    };

    const updateRoomData = Object.keys(roomData).length;
    let roomDataFull: Room;
    if (updateRoomData != 0) {
      roomDataFull = {
        ...roomTemplateData,
        occupants: roomData?.occupants || [],
        id: roomData.id,
      };
    } else {
      roomDataFull = {
        ...roomTemplateData,
        occupants: [],
      };
    }
    onFormSubmit(roomDataFull);

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
            <input
              {...register("roomType")}
              value={roomData.roomType}
              id="roomType"
              className="form-control"
              type="text"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="capacity">
              Capacity
            </label>
            <input
              {...register("capacity")}
              value={roomData.capacity}
              id="capacity"
              className="form-control"
              type="number"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="size">
              Size
            </label>
            <input
              {...register("size")}
              value={roomData.size}
              id="size"
              className="form-control"
              type="number"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="price">
              Price
            </label>
            <input
              {...register("price")}
              value={roomData.price}
              id="price"
              className="form-control"
              type="number"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="bedType">
              Bed Type
            </label>
            <select
              {...register("bedType")}
              id="bedType"
              className="form-select"
            >
              <option value=""></option>
              <option value="single" selected={roomData.bedType == "single"}>
                Single
              </option>
              <option value="double" selected={roomData.bedType == "double"}>
                Double
              </option>
              <option value="bunk" selected={roomData.bedType == "bunk"}>
                Bunk
              </option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="gender">
              Gender
            </label>
            <select {...register("gender")} id="gender" className="form-select">
              <option value=""></option>
              <option value="Male" selected={roomData.gender == "Male"}>
                Male
              </option>
              <option value="Female" selected={roomData.gender == "Female"}>
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
