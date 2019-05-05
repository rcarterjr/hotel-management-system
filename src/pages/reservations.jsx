import React, { Component } from "react";

export default class BookOnline extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// __________________ Hotel__________________
			hotelID: "", // primary key
			hotelName: "",
			hotelRating: "",
			address: "",
			state: "",
			city: "",
			// __________________Hotel Price__________________
			hotelName: "", // primary key
			hotelID: "", // foreign key
			price: "",
			// __________________Rooms__________________
			roomNumber: "", // primary key
			hotelName: "", // foreign key
			maxPersons: "",
			price: "",
			// __________________Room Type__________________
			typeOfRoom: "", // primary key
			roomNumber: "", // foreign key
			price: "",
			vacancy: "",
			// __________________Fitness Center__________________
			machineID: "", // primary key
			hotelID: "", // foreign key
			machineName: "",
			// __________________Location__________________
			address: "", // primary key
			hotelID: "", // foreign key
			city: "",
			state: "",
			// __________________Hotel Rating__________________
			hotelName: "", // primary key
			hotelID: "", // foreign key
			starRating: "",
			// __________________Reservations__________________
			reservationID: "", // primary key
			roomNumber: "", // foreign key
			currentStatus: "",
			dateIn: "",
			dateOut: "",
			madeBy: "",
			// __________________Stay Duration__________________
			dayIn: "", // primary key
			SSN: "", // foreign key
			dayOut: "",
			// __________________Customer__________________
			SSN: "", // primary key
			reservationID: "", // foreign key
			firstName: "",
			middleInitial: "",
			lastName: "",
			address: "",
			phone: "",
			city: "",
			state: "",
			sex: "",
			// __________________Room Change__________________
			reservationID: "", // primary key
			SSN: "", // foreign key
			roomNumber: "",
			// __________________Hotel Employee__________________
			employeeID: "", // primary key
			firstName: "",
			lastName: "",
			middleInitial: "",
			SSN: "",
			sex: "",
			// __________________Employee Account__________________
			SSN: "", // primary key
			employeeID: "", // foreign key
			username: "",
			pword: "",
			clearanceLevel: "",
			// __________________Room Service__________________
			menu: "", // primary key
			roomNumber: "", // foreign key
			price: ""
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	// _______________________________Hotel_________________________________________________
	// Create Hotel
	handleCreateHotel = e => {
		e.preventDefault();
		let hotel = {
			hotelID: this.state.hotelID,
			hotelName: this.state.hotelName,
			hotelRating: this.state.hotelRating,
			address: this.state.address,
			state: this.state.state,
			city: this.state.city,
		};
		fetch("http://localhost:4000/addhotel", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(hotel)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Hotel
	// Update Hotel
	handleUpdateHotel = e => {
		e.preventDefault();
		const hotel = {
			hotelID: this.state.hotelID,
			hotelName: this.state.hotelName,
			hotelRating: this.state.hotelRating,
			address: this.state.address,
			state: this.state.state,
			city: this.state.city,
		};
		fetch("http://localhost:4000/updatehotel/" + this.state.hotelID, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(hotel)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Hotel
	requestDeleteHotel = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deletehotel/" + this.state.hotelId, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Hotel Price___________________________________________
	// Create Hotel Price
	handleCreateHotelPrice = e => {
		e.preventDefault();
		let price = {
			hotelName: this.state.hotelName,
			hotelID: this.state.hotelID,
			price: this.state.price
		};
		fetch("http://localhost:4000/addhotelprice", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(price)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Hotel Price
	// Update Hotel Price
	handleUpdateHotelPrice = e => {
		e.preventDefault();
		const price = {
			hotelID: this.state.hotelID,
			hotelName: this.state.hotelName,
			hotelRating: this.state.hotelRating,
		};
		fetch("http://localhost:4000/updatehotelprice/" + this.state.hotelID, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(price)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Hotel Price
	requestDeleteHotelPrice = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deletehotelprice/" + this.state.hotelId, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Rooms_________________________________________________
	// Create Rooms
	handleCreateRoom = e => {
		e.preventDefault();
		let room = {
			roomNumber: this.state.roomNumber,
			hotelName: this.state.hotelName,
			maxPersons: this.state.maxPersons,
			price: this.state.price
		};
		fetch("http://localhost:4000/addroom", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(room)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Rooms
	// Update Rooms
	handleUpdateRooms = e => {
		e.preventDefault();
		const room = {
			roomNumber: this.state.roomNumber,
			hotelName: this.state.hotelName,
			maxPersons: this.state.maxPersons,
			price: this.state.price,
		};
		fetch("http://localhost:4000/updaterooms/" + this.state.roomNumber, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(room)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Rooms
	requestDeleteRoom = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deleteroom/" + this.state.roomNumber, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Room Type_____________________________________________
	// Create Room Type
	handleCreateRoomType = e => {
		e.preventDefault();
		let type = {
			typeOfRoom: this.state.typeOfRoom,
			roomNumber: this.state.roomNumber,
			price: this.state.price,
			vacancy: this.state.vacancy,
		};
		fetch("http://localhost:4000/addroomtype", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(type)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Room Type
	// Update Room Type
	handleUpdateRoomType = e => {
		e.preventDefault();
		const room = {
			typeOfRoom: this.state.typeOfRoom,
			roomNumber: this.state.roomNumber,
			price: this.state.price,
			vacancy: this.state.vacancy,
		};
		fetch("http://localhost:4000/updateroomtype/" + this.state.typeOfRoom, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(room)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Room Type
	requestDeleteRoomType = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deleteroomtype/" + this.state.typeOfRoom, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Fitness Center________________________________________
	// Create Fitness Center
	handleCreateFitnessCenter = e => {
		e.preventDefault();
		let fitnessCenter = {
			machineID: this.state.machineID,
			hotelID: this.state.hotelID,
			machineName: this.state.machineName
		};
		fetch("http://localhost:4000/addfitnesscenter", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(fitnessCenter)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Fitness Center
	// Update Fitness Center
	handleUpdateFitnessCenter = e => {
		e.preventDefault();
		const fitnessCenter = {
			machineID: this.state.machineID,
			hotelID: this.state.hotelID,
			machineName: this.state.machineName,
		};
		fetch("http://localhost:4000/updatefitnesscenter/" + this.state.machineID, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(fitnessCenter)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Fitness Center
	requestDeleteFitnessCenter = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deletefitnesscenter/" + this.state.machineID, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Location______________________________________________
	// Create Location
	handleCreateLocation = e => {
		e.preventDefault();
		let location = {
			address: this.state.address,
			hotelID: this.state.hotelID,
			city: this.state.city,
			state: this.state.state,
		};
		fetch("http://localhost:4000/addlocation", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(location)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Location
	// Update Location
	handleUpdateLocation = e => {
		e.preventDefault();
		const location = {
			address: this.state.address,
			hotelID: this.state.hotelID,
			city: this.state.city,
			state: this.state.state,
		};
		fetch("http://localhost:4000/updatelocation/" + this.state.address, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(location)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Location
	requestDeleteLocation = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deletelocation/" + this.state.address, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Hotel Rating__________________________________________
	// Create Hotel Rating
	handleCreateHotelRating = e => {
		e.preventDefault();
		let rating = {
			hotelName: this.state.hotelName,
			hotelID: this.state.hotelID,
			starRating: this.state.starRating
		};
		fetch("http://localhost:4000/addhotelrating", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(rating)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Hotel Rating
	// Update Hotel Rating
	handleUpdateHotelRating = e => {
		e.preventDefault();
		const rating = {
			hotelID: this.state.hotelID,
			hotelName: this.state.hotelName,
			starRating: this.state.starRating,
		};
		fetch("http://localhost:4000/updatehotelrating/" + this.state.hotelName, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(rating)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Hotel Rating
	requestDeleteHotelRating = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deletehotelrating/" + this.state.hotelName, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Reservations__________________________________________
	// Create Reservations
	handleCreateReservation = e => {
		e.preventDefault();
		let reservation = {
			reservationID: this.state.reservationID,
			roomNumber: this.state.roomNumber,
			currentStatus: this.state.currentStatus,
			dateIn: this.state.dateIn,
			dateOut: this.state.dateOut,
			madeBy: this.state.madeBy,
		};
		fetch("http://localhost:4000/addreservation", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(reservation)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Reservations
	// Update Reservations
	handleUpdateReservation = e => {
		e.preventDefault();
		const reservation = {
			reservationID: this.state.reservationID,
			roomNumber: this.state.roomNumber,
			currentStatus: this.state.currentStatus,
			dateIn: this.state.dateIn,
			dateOut: this.state.dateOut,
			madeBy: this.state.madeBy,
		};
		fetch("http://localhost:4000/updatereservation/" + this.state.reservationID, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(reservation)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Reservations
	requestDeleteReservation = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deletereservation/" + this.state.reservationID, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Stay Duration_________________________________________
	// Create Stay Duration
	handleCreateStayDuration = e => {
		e.preventDefault();
		let stayDuration = {
			dayIn: this.state.dayIn,
			SSN: this.state.SSN,
			dayOut: this.state.dayOut
		};
		fetch("http://localhost:4000/addstayduration", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(stayDuration)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Stay Duration
	// Update Stay Duration
	handleUpdateStayDuration = e => {
		e.preventDefault();
		const stay = {
			dayIn: this.state.dayIn,
			SSN: this.state.SSN,
			dayOut: this.state.dayOut,
		};
		fetch("http://localhost:4000/updatestayduration/" + this.state.dayIn, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(stay)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Stay Duration
	requestDeleteStayDuratino = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deletestayduration/" + this.state.dayIn, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Customer______________________________________________
	// Create Customer
	handleCreateCustomer = e => {
		e.preventDefault();
		let customer = {
			SSN: this.state.SSN,
			reservationID: this.state.reservationID,
			firstName: this.state.firstName,
			middleInitial: this.state.middleInitial,
			lastName: this.state.lastName,
			address: this.state.address,
			phone: this.state.phone,
			city: this.state.city,
			state: this.state.state,
			sex: this.state.sex
		};
		fetch("http://localhost:4000/addcustomer", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(customer)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Customer
	// Update Customer
	handleUpdateCustomer = e => {
		e.preventDefault();
		const customer = {
			SSN: this.state.SSN,
			reservationID: this.state.reservationID,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			middleInitial: this.state.middleInitial,
			phone: this.state.phone,
			address: this.state.address,
			state: this.state.state,
			city: this.state.city,
			sex: this.state.sex,
		};
		fetch("http://localhost:4000/updatecustomer/" + this.state.SSN, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(customer)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Customer
	requestDeleteCustomer = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deletecustomer/" + this.state.SSN, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Room Change___________________________________________
	// Create Room Change
	handleCreateRoomChange= e => {
		e.preventDefault();
		let roomChange = {
			reservationID: this.state.reservationID,
			SSN: this.state.SSN,
			roomNumber: this.state.roomNumber
		};
		fetch("http://localhost:4000/addroomchange", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(roomChange)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Room Change
	// Update Room Change
	handleUpdateRoomChange = e => {
		e.preventDefault();
		const change = {
			reservationID: this.state.reservationID,
			SSN: this.state.SSN,
			roomNumber: this.state.roomNumber,
		};
		fetch("http://localhost:4000/updateroomnumber/" + this.state.reservationID, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(change)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Room Change
	requestDeleteRoomChange = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deleteroomchange/" + this.state.reservationID, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Hotel Employee________________________________________
	// Create Hotel Employee
	handleCreateHotelEmployee = e => {
		e.preventDefault();
		let employee = {
			employeeID: this.state.employeeID,
			firstName: this.state.hotelID,
			middleInitial: this.state.middleInitial,
			lastName: this.state.lastName,
			SSN: this.state.SSN,
			sex: this.state.sex,
		};
		fetch("http://localhost:4000/addhotelemployee", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(employee)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Hotel Employee
	// Update Hotel Employee
	handleUpdateHotelEmployee = e => {
		e.preventDefault();
		const employee = {
			employeeID: this.state.employeeID,
			firstName: this.state.firstName,
			middleInitial: this.state.middleInitial,
			lastName: this.state.lastName,
			SSN: this.state.SSN,
			sex: this.state.sex,
		};
		fetch("http://localhost:4000/updatehotelemployee/" + this.state.employeeID, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(employee)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Hotel Employee
	requestDeleteHotelEmployee = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deletehotelemployee/" + this.state.employeeID, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Employee Account______________________________________
	// Create Employee Account
	handleCreateEmployeeAccount = e => {
		e.preventDefault();
		let account = {
			SSN: this.state.SSN,
			employeeID: this.state.employeeID,
			username: this.state.username,
			pword: this.state.pword,
			clearanceLevel: this.state.clearanceLevel,
		};
		fetch("http://localhost:4000/addemployeeaccount", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(account)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Employee Account
	// Update Employee Account
	handleUpdateEmployeeAccount = e => {
		e.preventDefault();
		const account = {
			SSN: this.state.SSN,
			employeeID: this.state.employeeID,
			username: this.state.username,
			pword: this.state.pword,
			clearanceLevel: this.state.clearanceLevel,
			city: this.state.address,
		};
		fetch("http://localhost:4000/updatehotel/" + this.state.SSN, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(account)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Employee Account
	requestDeleteEmployeeAccount = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deleteemployeeaccount/" + this.state.SSN, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// _______________________________Room Service__________________________________________
	// Create Room Service
	handleCreateRoomService = e => {
		e.preventDefault();
		let roomService = {
			menu: this.state.menu,
			roomNumber: this.state.roomNumber,
			price: this.state.price
		};
		fetch("http://localhost:4000/addroomservice", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(roomService)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Room Service
	// Update Room Service
	handleUpdateRoomService = e => {
		e.preventDefault();
		const roomService = {
			menu: this.state.menu,
			roomNumber: this.state.roomNumber,
			price: this.state.price,
		};
		fetch("http://localhost:4000/updateroomservice/" + this.state.menu, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(roomService)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Room Service
	requestDeleteRoomService = e => {
		e.preventDefault();

		fetch("http://localhost:4000/deleteroomservice/" + this.state.menu, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
			
			})
			.catch(err => console.log("ERROR: ", err));
	};
	//  **********************End of Queries*************************************


	render() {
		return (
			<main>
				<section>
					<div className="page-header">
						<h2>Create Hotel </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestInfo}>
								<div className="form-group">
									<input
										type="text"
										name="hotelName"
										id="hotelName"
										placeholder="Hotel Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="hotelID"
										id="hotelID"
										placeholder="Hotel ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="address"
										id="address"
										placeholder="Address"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="State">State</label>
									<select
										className="form-control input-lg"
										name="State"
										id="State"
										required
										onChange={this.handleChange}
									>
										<option value="">Please Select...</option>
										<option value="AL">AL</option>
										<option value="AK">AK</option>
										<option value="AR">AR</option>
										<option value="AZ">AZ</option>
										<option value="CA">CA</option>
										<option value="CO">CO</option>
										<option value="CT">CT</option>
										<option value="DE">DE</option>
										<option value="FL">FL</option>
										<option value="GA">GA</option>
										<option value="HI">HI</option>
										<option value="ID">ID</option>
										<option value="IA">IA</option>
										<option value="IL">IL</option>
										<option value="IN">IN</option>
										<option value="KS">KS</option>
										<option value="KY">KY</option>
										<option value="LA">LA</option>
										<option value="MA">MA</option>
										<option value="MD">MD</option>
										<option value="ME">ME</option>
										<option value="MI">MI</option>
										<option value="MN">MN</option>
										<option value="MO">MO</option>
										<option value="MS">MS</option>
										<option value="MT">MT</option>
										<option value="NC">NC</option>
										<option value="ND">ND</option>
										<option value="NE">NE</option>
										<option value="NH">NH</option>
										<option value="NJ">NJ</option>
										<option value="NM">NM</option>
										<option value="NV">NV</option>
										<option value="NY">NY</option>
										<option value="OH">OH</option>
										<option value="OK">OK</option>
										<option value="OR">OR</option>
										<option value="PA">PA</option>
										<option value="RI">RI</option>
										<option value="SC">SC</option>
										<option value="SD">SD</option>
										<option value="TN">TN</option>
										<option value="TX">TX</option>
										<option value="UT">UT</option>
										<option value="VT">VT</option>
										<option value="VA">VA</option>
										<option value="WA">WA</option>
										<option value="WI">WI</option>
										<option value="WV">WV</option>
										<option value="WY">WY</option>
									</select>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="city"
										id="city"
										placeholder="City"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Hotel
								</button>
								<h1>{this.state.responseSuccess}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Update Reservation </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestUpdate}>
								<div className="form-group">
									<input
										type="number"
										name="Res_id"
										id="Res_id"
										placeholder="Reservation ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="hotelID"
										id="hotelID"
										placeholder="First Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="hotelName"
										id="hotelName"
										placeholder="Last Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="price"
										name="price"
										id="price"
										placeholder="price Address"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="tel"
										name="starRatingNum"
										id="starRating"
										placeholder="###-###-####"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="hotel">hotel</label>
									<select
										className="form-control input-lg"
										name="hotel"
										id="hotel"
										required
										onChange={this.handleChange}
									>
										<option value="">Please Select...</option>
										<option value="Bullet">Bullet</option>
										<option value="Chris">Chris</option>
										<option value="Denny">Denny</option>
										<option value="Tommy">Tommy</option>
										<option value="Ned">Ned</option>
										<option value="Walter">Walter</option>
										<option value="Daenerys">Daenerys</option>
										<option value="Rick">Rick</option>
										<option value="Morty">Morty</option>
										<option value="Peter">Peter</option>
										<option value="Eric">Eric</option>
									</select>
								</div>
								<div className="form-group">
									<label htmlFor="hotel">Date</label>
									<input
										type="Date"
										name="date"
										id="date"
										placeholder="MM/DD/YYYY"
										maxLength="10"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Reservation
								</button>
								<h1>{this.state.responseUpdated}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Delete Reservation </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestDelete}>
								<div className="form-group">
									<label htmlFor="hotel">Reservation ID</label>
									<input
										type="number"
										name="Res_id"
										id="Res_id"
										placeholder="Reservation ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>

								<button type="submit" className="btn button btn-lg">
									Delete Reservation
								</button>
								<h1>{this.state.responseDeleted}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Create hotel </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestArtInfo}>
								<div className="form-group">
									<input
										type="number"
										name="hotelID"
										id="hotelID"
										placeholder="Enter #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="firstName"
										id="firstName"
										placeholder="First Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="hotelName"
										id="hotelName"
										placeholder="Last Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="hotelID">hotelID</label>
									<select
										className="form-control input-lg"
										name="hotelID"
										id="hotelID"
										required
										onChange={this.handleChange}
									>
										<option value="">Please Select...</option>
										<option value="0">0</option>
										<option value="1">1</option>
										<option value="2">2</option>
									</select>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="hotelRating"
										id="hotelRating"
										placeholder="Rating #"
										maxLength="12"
										min="0"
										max="5"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create hotel
								</button>
								<h1>{this.state.address}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Update hotel </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestArtUpdate}>
								<div className="form-group">
									<input
										type="number"
										name="hotelID"
										id="hotelID"
										placeholder="Enter #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="firstName"
										id="firstName"
										placeholder="First Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="hotelName"
										id="hotelName"
										placeholder="Last Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="hotelID">hotelID</label>
									<select
										className="form-control input-lg"
										name="hotelID"
										id="hotelID"
										required
										onChange={this.handleChange}
									>
										<option value="">Please Select...</option>
										<option value="0">0</option>
										<option value="1">1</option>
										<option value="2">2</option>
									</select>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="hotelRating"
										id="hotelRating"
										placeholder="Rating #"
										maxLength="12"
										min="0"
										max="5"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update hotel
								</button>
								<h1>{this.state.city}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Delete hotel </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestArtDelete}>
								<div className="form-group">
									<label htmlFor="hotel">hotel ID</label>
									<input
										type="number"
										name="hotelID"
										id="hotelID"
										placeholder="hotel ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete hotel
								</button>
								<h1>{this.state.state}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Add Location </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestLocationInfo}>
								<div className="form-group">
									<input
										type="number"
										name="hotelID"
										id="hotelID"
										placeholder="Enter #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="State">State</label>
									<select
										className="form-control input-lg"
										name="State"
										id="State"
										required
										onChange={this.handleChange}
									>
										<option value="">Please Select...</option>
										<option value="AL">AL</option>
										<option value="AK">AK</option>
										<option value="AR">AR</option>
										<option value="AZ">AZ</option>
										<option value="CA">CA</option>
										<option value="CO">CO</option>
										<option value="CT">CT</option>
										<option value="DE">DE</option>
										<option value="FL">FL</option>
										<option value="GA">GA</option>
										<option value="HI">HI</option>
										<option value="ID">ID</option>
										<option value="IA">IA</option>
										<option value="IL">IL</option>
										<option value="IN">IN</option>
										<option value="KS">KS</option>
										<option value="KY">KY</option>
										<option value="LA">LA</option>
										<option value="MA">MA</option>
										<option value="MD">MD</option>
										<option value="ME">ME</option>
										<option value="MI">MI</option>
										<option value="MN">MN</option>
										<option value="MO">MO</option>
										<option value="MS">MS</option>
										<option value="MT">MT</option>
										<option value="NC">NC</option>
										<option value="ND">ND</option>
										<option value="NE">NE</option>
										<option value="NH">NH</option>
										<option value="NJ">NJ</option>
										<option value="NM">NM</option>
										<option value="NV">NV</option>
										<option value="NY">NY</option>
										<option value="OH">OH</option>
										<option value="OK">OK</option>
										<option value="OR">OR</option>
										<option value="PA">PA</option>
										<option value="RI">RI</option>
										<option value="SC">SC</option>
										<option value="SD">SD</option>
										<option value="TN">TN</option>
										<option value="TX">TX</option>
										<option value="UT">UT</option>
										<option value="VT">VT</option>
										<option value="VA">VA</option>
										<option value="WA">WA</option>
										<option value="WI">WI</option>
										<option value="WV">WV</option>
										<option value="WY">WY</option>
									</select>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="City"
										id="City"
										placeholder="City"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="Address"
										id="Address"
										placeholder="Address"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="Zip"
										id="Zip"
										placeholder="Zipcode"
										maxLength="5"
										minLength="5"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Confirm Location
								</button>
								<h1>{this.state.responseLocationSuccess}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Update Location </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestLocationUpdate}>
								<div className="form-group">
									<input
										type="number"
										name="hotelID"
										id="hotelID"
										placeholder="Enter #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="State">State</label>
									<select
										className="form-control input-lg"
										name="State"
										id="State"
										required
										onChange={this.handleChange}
									>
										<option value="">Please Select...</option>
										<option value="AL">AL</option>
										<option value="AK">AK</option>
										<option value="AR">AR</option>
										<option value="AZ">AZ</option>
										<option value="CA">CA</option>
										<option value="CO">CO</option>
										<option value="CT">CT</option>
										<option value="DE">DE</option>
										<option value="FL">FL</option>
										<option value="GA">GA</option>
										<option value="HI">HI</option>
										<option value="ID">ID</option>
										<option value="IA">IA</option>
										<option value="IL">IL</option>
										<option value="IN">IN</option>
										<option value="KS">KS</option>
										<option value="KY">KY</option>
										<option value="LA">LA</option>
										<option value="MA">MA</option>
										<option value="MD">MD</option>
										<option value="ME">ME</option>
										<option value="MI">MI</option>
										<option value="MN">MN</option>
										<option value="MO">MO</option>
										<option value="MS">MS</option>
										<option value="MT">MT</option>
										<option value="NC">NC</option>
										<option value="ND">ND</option>
										<option value="NE">NE</option>
										<option value="NH">NH</option>
										<option value="NJ">NJ</option>
										<option value="NM">NM</option>
										<option value="NV">NV</option>
										<option value="NY">NY</option>
										<option value="OH">OH</option>
										<option value="OK">OK</option>
										<option value="OR">OR</option>
										<option value="PA">PA</option>
										<option value="RI">RI</option>
										<option value="SC">SC</option>
										<option value="SD">SD</option>
										<option value="TN">TN</option>
										<option value="TX">TX</option>
										<option value="UT">UT</option>
										<option value="VT">VT</option>
										<option value="VA">VA</option>
										<option value="WA">WA</option>
										<option value="WI">WI</option>
										<option value="WV">WV</option>
										<option value="WY">WY</option>
									</select>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="City"
										id="City"
										placeholder="City"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="Address"
										id="Address"
										placeholder="Address"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="Zip"
										id="Zip"
										placeholder="Zipcode"
										maxLength="5"
										minLength="5"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Location
								</button>
								<h1>{this.state.responseLocationUpdated}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Delete Location </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestLocationDelete}>
								<div className="form-group">
									<label htmlFor="Location">SHOP ID</label>
									<input
										type="number"
										name="hotelID"
										id="hotelID"
										placeholder="Shop ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Location
								</button>
								<h1>{this.state.responseLocationDeleted}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Add Inventory </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestInventoryInfo}>
								<div className="form-group">
									<input
										type="number"
										name="vacancy"
										id="vacancy"
										placeholder="Enter #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="typeOfRoom"
										id="typeOfRoom"
										placeholder="Equipment Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="price"
										id="price"
										placeholder="price"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Inventory
								</button>
								<h1>{this.state.responseInventorySuccess}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Update Inventory </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestInventoryUpdate}>
								<div className="form-group">
									<input
										type="number"
										name="vacancy"
										id="vacancy"
										placeholder="Enter #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="typeOfRoom"
										id="typeOfRoom"
										placeholder="Equipment Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="price"
										id="price"
										placeholder="price"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Inventory
								</button>
								<h1>{this.state.responseInventoryUpdated}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Delete Inventory </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestInventoryDelete}>
								<div className="form-group">
									<label htmlFor="Inventory">Equipment ID</label>
									<input
										type="number"
										name="vacancy"
										id="vacancy"
										placeholder="Equipment ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Inventory
								</button>
								<h1>{this.state.responseInventoryDeleted}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Add Manager </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestManInfo}>
								<div className="form-group">
									<input
										type="number"
										name="machineName"
										id="machineName"
										placeholder="Enter Manager ID #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="firstName"
										id="firstName"
										placeholder="First Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="hotelName"
										id="hotelName"
										placeholder="Last Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="hotelID">hotelID</label>
									<select
										className="form-control input-lg"
										name="hotelID"
										id="hotelID"
										required
										onChange={this.handleChange}
									>
										<option value="">Please Select...</option>
										<option value="0">0</option>
										<option value="1">1</option>
										<option value="2">2</option>
									</select>
								</div>
								<button type="submit" className="btn button btn-lg">
									Add Manager
								</button>
								<h1>{this.state.machineID}</h1>
							</form>
						</div>
					</div>
				</section>
				<section>
					<div className="page-header">
						<h2>Update Manager </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestManUpdate}>
								<div className="form-group">
									<input
										type="number"
										name="machineName"
										id="machineName"
										placeholder="Enter ID #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="firstName"
										id="firstName"
										placeholder="First Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="hotelName"
										id="hotelName"
										placeholder="Last Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="hotelID">hotelID</label>
									<select
										className="form-control input-lg"
										name="hotelID"
										id="hotelID"
										required
										onChange={this.handleChange}
									>
										<option value="">Please Select...</option>
										<option value="0">0</option>
										<option value="1">1</option>
										<option value="2">2</option>
									</select>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Manager
								</button>
								<h1>{this.state.responseManUpdated}</h1>
							</form>
						</div>
					</div>
				</section>
				<section>
					<div className="page-header">
						<h2>Delete Manager </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestManDelete}>
								<div className="form-group">
									<label htmlFor="Manager">MANAGER ID</label>
									<input
										type="number"
										name="machineName"
										id="machineName"
										placeholder="Manager ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Manager
								</button>
								<h1>{this.state.responseManDeleted}</h1>
							</form>
						</div>
					</div>
				</section>
				<section>
					<div className="page-header">
						<h2>Add Manager Account </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestManAccountInfo}>
								<div className="form-group">
									<input
										type="number"
										name="machineName"
										id="machineName"
										placeholder="Enter Manager ID #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="address"
										id="address"
										placeholder="Username"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										name="city"
										id="city"
										placeholder="Password"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Add Manager
								</button>
								<h1>{this.state.state}</h1>
							</form>
						</div>
					</div>
				</section>
				<section>
					<div className="page-header">
						<h2>Update Manager Account</h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestManAccountUpdate}>
								<div className="form-group">
									<input
										type="number"
										name="machineName"
										id="machineName"
										placeholder="Enter ID #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="address"
										id="address"
										placeholder="First Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										name="city"
										id="city"
										placeholder="Last Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Manager Account
								</button>
								<h1>{this.state.responseManAccountUpdated}</h1>
							</form>
						</div>
					</div>
				</section>
				<section>
					<div className="page-header">
						<h2>Delete Manager Account</h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestManAccountDelete}>
								<div className="form-group">
									<label htmlFor="Manager">MANAGER ID</label>
									<input
										type="number"
										name="machineName"
										id="machineName"
										placeholder="Manager ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Manager Account
								</button>
								<h1>{this.state.responseManDeleted}</h1>
							</form>
						</div>
					</div>
				</section>
				<section>
					<div className="page-header">
						<h2>Add Customer </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestCustomerInfo}>
								<div className="form-group">
									<input
										type="number"
										name="SSN"
										id="SSN"
										placeholder="Enter Customer ID #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="firstName"
										id="firstName"
										placeholder="First Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="hotelName"
										id="hotelName"
										placeholder="Last Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Add Customer
								</button>
								<h1>{this.state.responseCustomerSuccess}</h1>
							</form>
						</div>
					</div>
				</section>
				<section>
					<div className="page-header">
						<h2>Update Customer </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestCustomerUpdate}>
								<div className="form-group">
									<input
										type="number"
										name="SSN"
										id="SSN"
										placeholder="Enter ID #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="firstName"
										id="firstName"
										placeholder="First Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="hotelName"
										id="hotelName"
										placeholder="Last Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Customer
								</button>
								<h1>{this.state.responseCustomerUpdated}</h1>
							</form>
						</div>
					</div>
				</section>
				<section>
					<div className="page-header">
						<h2>Delete Customer </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestCustomerDelete}>
								<div className="form-group">
									<label htmlFor="Customer">CUSTOMER ID</label>
									<input
										type="number"
										name="SSN"
										id="SSN"
										placeholder="Customer ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Customer
								</button>
								<h1>{this.state.responseCustomerDeleted}</h1>
							</form>
						</div>
					</div>
				</section>
				<section>
					<div className="page-header">
						<h2>Add Customer Account</h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestCustomerAccountInfo}>
								<div className="form-group">
									<input
										type="number"
										name="SSN"
										id="SSN"
										placeholder="Enter Customer ID #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="price"
										name="price"
										id="price"
										placeholder="you@example.com"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="starRating"
										id="starRating"
										placeholder="starRating Number"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="address"
										id="address"
										placeholder="Username"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										name="city"
										id="city"
										placeholder="Password"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Add Customer Account
								</button>
								<h1>{this.state.responseCustomerAccountSuccess}</h1>
							</form>
						</div>
					</div>
				</section>
				<section>
					<div className="page-header">
						<h2>Update Customer Account</h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestCustomerAccountUpdate}>
								<div className="form-group">
									<input
										type="number"
										name="SSN"
										id="SSN"
										placeholder="Enter ID #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="price"
										name="price"
										id="price"
										placeholder="you@example.com"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="starRating"
										id="starRating"
										placeholder="starRating Number"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="address"
										id="address"
										placeholder="Username"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										name="city"
										id="city"
										placeholder="Password"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Customer Account
								</button>
								<h1>{this.state.responseCustomerAccountUpdated}</h1>
							</form>
						</div>
					</div>
				</section>
				<section>
					<div className="page-header">
						<h2>Delete Customer Account </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestCustomerAccountDelete}>
								<div className="form-group">
									<label htmlFor="Customer">CUSTOMER ID</label>
									<input
										type="number"
										name="SSN"
										id="SSN"
										placeholder="Customer ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Customer Account
								</button>
								<h1>{this.state.responseCustomerAccountDeleted}</h1>
							</form>
						</div>
					</div>
				</section>
				<section>
					<div className="page-header">
						<h2>Add Merchandise </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestMerchandiseInfo}>
								<div className="form-group">
									<input
										type="number"
										name="currentStatus"
										id="currentStatus"
										placeholder="Enter #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="reservationID"
										id="reservationID"
										placeholder="Type of Merchandise"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="dateIn"
										id="dateIn"
										placeholder="Name of Merchandise"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="dateOut"
										id="dateOut"
										placeholder="price"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="madeBy"
										id="madeBy"
										placeholder="Current stock"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Merchandise
								</button>
								<h1>{this.state.responseMerchSuccess}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Update Merchandise </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestMerchandiseUpdate}>
								<div className="form-group">
									<input
										type="number"
										name="currentStatus"
										id="currentStatus"
										placeholder="Enter #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="reservationID"
										id="reservationID"
										placeholder="Type of Merchandise"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="dateIn"
										id="dateIn"
										placeholder="Name of Merchandise"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="dateOut"
										id="dateOut"
										placeholder="price"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="madeBy"
										id="madeBy"
										placeholder="Current stock"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Merchandise
								</button>
								<h1>{this.state.responseMerchUpdated}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Delete Merchandise </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestMerchandiseDelete}>
								<div className="form-group">
									<label htmlFor="Inventory">Merchandise ID</label>
									<input
										type="number"
										name="currentStatus"
										id="currentStatus"
										placeholder="Merchandise ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Merchandise
								</button>
								<h1>{this.state.responseMerchDeleted}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Create Room </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestRoomInfo}>
								<div className="form-group">
									<input
										type="number"
										name="SSN"
										id="SSN"
										placeholder="Enter Room #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="SSN"
										id="SSN"
										placeholder="Enter Cust #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="dayIn"
										id="dayIn"
										placeholder="Enter Room Type #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="price"
										id="price"
										placeholder="Enter price"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="vacancy"
										id="vacancy"
										placeholder="Equipment ID"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Room
								</button>
								<h1>{this.state.reponseRoomSuccess}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Update Room </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestRoomUpdate}>
								<div className="form-group">
									<input
										type="number"
										name="SSN"
										id="SSN"
										placeholder="Enter Room #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="SSN"
										id="SSN"
										placeholder="Enter Cust #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="dayIn"
										id="dayIn"
										placeholder="Enter Room Type #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="price"
										id="price"
										placeholder="Enter price"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="vacancy"
										id="vacancy"
										placeholder="Equipment ID"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Room
								</button>
								<h1>{this.state.responseRoomUpdate}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Delete Room </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestRoomCancellation}>
								<div className="form-group">
									<label htmlFor="Inventory">Room No</label>
									<input
										type="number"
										name="SSN"
										id="SSN"
										placeholder="Enter Room Number"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Room
								</button>
								<h1>{this.state.responseRoomDelete}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Create Hotel </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestRoom}>
								<div className="form-group">
									<input
										type="number"
										name="Tat_no"
										id="Tat_no"
										placeholder="Enter Hotel #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="SSN"
										id="SSN"
										placeholder="Enter Cust #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="Type"
										id="Type"
										placeholder="Enter Type #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="roomNumber"
										id="roomNumber"
										placeholder="Enter roomNumber #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="SSN"
										id="SSN"
										placeholder="EST # of hours"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="hotelID">hotelID</label>
									<select
										className="form-control input-lg"
										name="hotelID"
										id="hotelID"
										required
										onChange={this.handleChange}
									>
										<option value="">Please Select...</option>
										<option value="0">0</option>
										<option value="1">1</option>
										<option value="2">2</option>
									</select>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="vacancy"
										id="vacancy"
										placeholder="Equipment ID #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Hotel
								</button>
								<h1>{this.state.responseHotelSuccess}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Update Hotel </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestRoomUpdate}>
								<div className="form-group">
									<input
										type="number"
										name="Tat_no"
										id="Tat_no"
										placeholder="Enter Hotel #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="SSN"
										id="SSN"
										placeholder="Enter Cust #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="Type"
										id="Type"
										placeholder="Enter Type #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="roomNumber"
										id="roomNumber"
										placeholder="Enter roomNumber #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="SSN"
										id="SSN"
										placeholder="EST # of hours"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="hotelID">hotelID</label>
									<select
										className="form-control input-lg"
										name="hotelID"
										id="hotelID"
										required
										onChange={this.handleChange}
									>
										<option value="">Please Select...</option>
										<option value="0">0</option>
										<option value="1">1</option>
										<option value="2">2</option>
									</select>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="vacancy"
										id="vacancy"
										placeholder="Equipment ID #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Hotel
								</button>
								<h1>{this.state.responseHotelUpdated}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Delete Hotel </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestRoomDelete}>
								<div className="form-group">
									<label htmlFor="Inventory">Room No</label>
									<input
										type="number"
										name="Tat_no"
										id="Tat_no"
										placeholder="Enter Hotel Number"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Hotel
								</button>
								<h1>{this.state.responseHotelDeleted}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Create Result </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestResultInfo}>
								<div className="form-group">
									<input
										type="number"
										name="firstName"
										id="firstName"
										placeholder="Enter Result #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="hotelID">hotelID</label>
									<select
										className="form-control input-lg"
										name="hotelID"
										id="hotelID"
										required
										onChange={this.handleChange}
									>
										<option value="">Please Select...</option>
										<option value="0">0</option>
										<option value="1">1</option>
										<option value="2">2</option>
									</select>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="SSN"
										id="SSN"
										placeholder="Enter Cust #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="hotelID"
										id="hotelID"
										placeholder="Enter hotel #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="lastName">Reservation Type</label>
									<select
										className="form-control input-lg"
										name="lastName"
										id="lastName"
										required
										onChange={this.handleChange}
									>
										<option value="">Please Select...</option>
										<option value="Hotel">Hotel</option>
										<option value="Room">Room</option>
									</select>
								</div>
								<div className="form-group">
									<label htmlFor="middleInitial">Reservation Date</label>
									<input
										type="Date"
										name="middleInitial"
										id="middleInitial"
										placeholder="MM/DD/YYYY"
										maxLength="10"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="SSN">Start Time</label>
									<input
										type="time"
										name="SSN"
										id="SSN"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="employeeID">End Time</label>
									<input
										type="time"
										name="employeeID"
										id="employeeID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Result
								</button>
								<h1>{this.state.sex}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Update Result </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestResultUpdate}>
								<div className="form-group">
									<input
										type="number"
										name="firstName"
										id="firstName"
										placeholder="Enter Result #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="hotelID">hotelID</label>
									<select
										className="form-control input-lg"
										name="hotelID"
										id="hotelID"
										required
										onChange={this.handleChange}
									>
										<option value="">Please Select...</option>
										<option value="0">0</option>
										<option value="1">1</option>
										<option value="2">2</option>
									</select>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="SSN"
										id="SSN"
										placeholder="Enter Cust #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="hotelID"
										id="hotelID"
										placeholder="Enter hotel #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="lastName">Reservation Type</label>
									<select
										className="form-control input-lg"
										name="lastName"
										id="lastName"
										required
										onChange={this.handleChange}
									>
										<option value="">Please Select...</option>
										<option value="Hotel">Hotel</option>
										<option value="Room">Room</option>
									</select>
								</div>
								<div className="form-group">
									<label htmlFor="middleInitial">Reservation Date</label>
									<input
										type="Date"
										name="middleInitial"
										id="middleInitial"
										placeholder="MM/DD/YYYY"
										maxLength="10"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="SSN">Start Time</label>
									<input
										type="time"
										name="SSN"
										id="SSN"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="employeeID">End Time</label>
									<input
										type="time"
										name="employeeID"
										id="employeeID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Result
								</button>
								<h1>{this.state.responseResultUpdated}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Delete Result </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestResultDelete}>
								<div className="form-group">
									<label htmlFor="Result">Result ID</label>
									<input
										type="number"
										name="firstName"
										id="firstName"
										placeholder="Enter Result ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Result
								</button>
								<h1>{this.state.responseResultDeleted}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Create Waiver Policy </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestWaiverPolicyInfo}>
								<div className="form-group">
									<input
										type="number"
										name="menu"
										id="menu"
										placeholder="Enter Policy #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="price"
										id="price"
										placeholder="Policy Sign #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="middleInitial">Policy Date</label>
									<input
										type="date"
										name="roomNumber"
										id="roomNumber"
										placeholder="MM/DD/YYYY"
										maxLength="10"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="SSN"
										id="SSN"
										placeholder="Cust ID #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Waiver Policy
								</button>
								<h1>{this.state.responseWaiverPolicySuccess}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Update Waiver Policy </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestWaiverPolicyUpdate}>
								<div className="form-group">
									<input
										type="number"
										name="menu"
										id="menu"
										placeholder="Enter Policy #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="price"
										id="price"
										placeholder="Policy Sign #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="middleInitial">Policy Date</label>
									<input
										type="date"
										name="roomNumber"
										id="roomNumber"
										placeholder="MM/DD/YYYY"
										maxLength="10"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="SSN"
										id="SSN"
										placeholder="Cust ID #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Waiver Policy
								</button>
								<h1>{this.state.responseWaiverPolicyUpdated}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Delete Waiver Policy </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestWaiverPolicyDelete}>
								<div className="form-group">
									<label htmlFor="Result">Policy ID</label>
									<input
										type="number"
										name="menu"
										id="menu"
										placeholder="Enter Result ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Waiver Policy
								</button>
								<h1>{this.state.responseWaiverPolicyDeleted}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Create Cancellation Policy </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestCancellationPolicyInfo}>
								<div className="form-group">
									<input
										type="number"
										name="menu"
										id="menu"
										placeholder="Enter Policy #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="price"
										id="price"
										placeholder="Policy Sign #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="middleInitial">Policy Date</label>
									<input
										type="date"
										name="roomNumber"
										id="roomNumber"
										placeholder="MM/DD/YYYY"
										maxLength="10"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="SSN"
										id="SSN"
										placeholder="Cust ID #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Cancellation Policy
								</button>
								<h1>{this.state.responseCancellationPolicySuccess}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Update Cancellation Policy </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestCancellationPolicyUpdate}>
								<div className="form-group">
									<input
										type="number"
										name="menu"
										id="menu"
										placeholder="Enter Policy #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="price"
										id="price"
										placeholder="Policy Sign #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="middleInitial">Policy Date</label>
									<input
										type="date"
										name="roomNumber"
										id="roomNumber"
										placeholder="MM/DD/YYYY"
										maxLength="10"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="number"
										name="SSN"
										id="SSN"
										placeholder="Cust ID #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Cancellation Policy
								</button>
								<h1>{this.state.responseCancellationPolicyUpdated}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Delete Cancellation Policy </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestCancellationPolicyDelete}>
								<div className="form-group">
									<label htmlFor="Result">Policy ID</label>
									<input
										type="number"
										name="menu"
										id="menu"
										placeholder="Enter Result ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Cancellation Policy
								</button>
								<h1>{this.state.responseCancellationPolicyDeleted}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Add Shop Owner </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestShopOwnerInfo}>
								<div className="form-group">
									<input
										type="number"
										name="Own_id"
										id="Own_id"
										placeholder="Enter Unique ID #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="firstName"
										id="firstName"
										placeholder="First Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="hotelName"
										id="hotelName"
										placeholder="Last Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="hotelID">hotelID</label>
									<select
										className="form-control input-lg"
										name="hotelID"
										id="hotelID"
										required
										onChange={this.handleChange}
									>
										<option value="">Please Select...</option>
										<option value="0">0</option>
										<option value="1">1</option>
										<option value="2">2</option>
									</select>
								</div>
								<button type="submit" className="btn button btn-lg">
									Create Shop Owner
								</button>
								<h1>{this.state.responseShopOwnerSuccess}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Update Shop Owner </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestShopOwnerUpdate}>
								<div className="form-group">
									<input
										type="number"
										name="Own_id"
										id="Own_id"
										placeholder="Enter Unique ID #"
										maxLength="12"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="firstName"
										id="firstName"
										placeholder="First Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="hotelName"
										id="hotelName"
										placeholder="Last Name"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="hotelID">hotelID</label>
									<select
										className="form-control input-lg"
										name="hotelID"
										id="hotelID"
										required
										onChange={this.handleChange}
									>
										<option value="">Please Select...</option>
										<option value="0">0</option>
										<option value="1">1</option>
										<option value="2">2</option>
									</select>
								</div>
								<button type="submit" className="btn button btn-lg">
									Update Shop Owner
								</button>
								<h1>{this.state.responseShopOwnerUpdated}</h1>
							</form>
						</div>
					</div>
				</section>

				<section>
					<div className="page-header">
						<h2>Delete Shop Owner </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestShopOwnerDelete}>
								<div className="form-group">
									<label htmlFor="Result">Shop Owner ID</label>
									<input
										type="number"
										name="Own_id"
										id="Own_id"
										placeholder="Enter Owner ID"
										className="form-control input-lg"
										required
										onChange={this.handleChange}
									/>
								</div>
								<button type="submit" className="btn button btn-lg">
									Delete Shop Owner
								</button>
								<h1>{this.state.responseShopOwnerDeleted}</h1>
							</form>
						</div>
					</div>
				</section>
			</main>
		);
	}
}
