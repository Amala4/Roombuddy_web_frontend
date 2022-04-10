import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const RoomCard = (props) => {
    const  room  = props.room;

    return(
        <div className="card-container">
            <img src="https://res.cloudinary.com/amala4/image/upload/v1617518616/00002.jpg" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-room/${room._id}`}>
                        { room.roommate_rent }
                    </Link>
                </h2>
                <h3>{room.state}</h3>
                <p>{room.campus}</p>
            </div>
        </div>
    )
};

export default RoomCard;