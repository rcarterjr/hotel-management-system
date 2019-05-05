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
	// Delete Hotel
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
	// Delete Hotel Price
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
	// Delete Rooms
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
	// Delete Room Type
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
	// Delete Fitness Center
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
	// Delete Location
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
	// Delete Hotel Rating
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
	// Delete Reservations
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
				this.setState({ responseLocationSuccess: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Stay Duration
	// Update Stay Duration
	// Delete Stay Duration
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
				this.setState({ responseLocationSuccess: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Customer
	// Update Customer
	// Delete Customer
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
				this.setState({ responseLocationSuccess: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Room Change
	// Update Room Change
	// Delete Room Change
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
				this.setState({ responseLocationSuccess: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Hotel Employee
	// Update Hotel Employee
	// Delete Hotel Employee
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
				this.setState({ responseLocationSuccess: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Employee Account
	// Update Employee Account
	// Delete Employee Account
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
				this.setState({ responseLocationSuccess: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Read Room Service
	// Update Room Service
	// Delete Room Service

	// add reservation
	requestInfo = e => {
		e.preventDefault();
		const reservationBody = {
			hotelID: this.state.hotelID,
			hotelName: this.state.hotelName,
			price: this.state.price,
			starRating: this.state.starRating,
			hotel: this.state.hotel,
			resvDate: this.state.date
		};
		fetch("http://localhost:4000/addreservation", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(reservationBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseSuccess: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Update Reservation
	requestUpdate = e => {
		e.preventDefault();
		const reservationBody = {
			hotelID: this.state.hotelID,
			hotelName: this.state.hotelName,
			price: this.state.price,
			starRatingNum: this.state.starRatingNum,
			hotel: this.state.hotel,
			resvDate: this.state.date,
			Res_id: this.state.id
		};
		fetch("http://localhost:4000/updatereservation/" + this.state.Res_id, {
			method: "PATCH",
			//mode:'CORS',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(reservationBody)
			// body.Res_id:JSON.stringify(reservationBody.Res_id)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseUpdated: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Delete Reservation
	requestDelete = e => {
		e.preventDefault();

		console.log("http://localhost:4000/deletereservation/" + this.state.Res_id);
		fetch("http://localhost:4000/deletereservation/" + this.state.Res_id, {
			method: "GET",

			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseDeleted: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Add hotel
	requestArtInfo = e => {
		e.preventDefault();
		const hotelBody = {
			hotelID: this.state.hotelID,
			firstName: this.state.firstName,
			hotelName: this.state.hotelName,
			hotelID: this.state.hotelID,
			hotelRating: this.state.hotelRating
		};
		fetch("http://localhost:4000/addhotel", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(hotelBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ address: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// hotel Update
	requestArtUpdate = e => {
		e.preventDefault();
		const hotelBody = {
			hotelID: this.state.hotelID,
			firstName: this.state.firstName,
			hotelName: this.state.hotelName,
			hotelID: this.state.hotelID,
			hotelRating: this.state.hotelRating
		};
		fetch("http://localhost:4000/updatehotel/" + this.state.hotelID, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(hotelBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ city: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Delete hotel
	requestArtDelete = e => {
		e.preventDefault();
		console.log("http://localhost:4000/deletehotel/" + this.state.hotelID);
		fetch("http://localhost:4000/deletehotel/" + this.state.hotelID, {
			method: "GET",

			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ state: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};
	

	// Location Update
	requestLocationUpdate = e => {
		e.preventDefault();
		const locationBody = {
			hotelID: this.state.hotelID,
			State: this.state.roomNumber,
			maxPersons: this.state.maxPersons,
			price: this.state.price,
			Zip: this.state.Zip
		};
		fetch("http://localhost:4000/updatelocation/" + this.state.hotelID, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(locationBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseLocationUpdated: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Delete Location
	requestLocationDelete = e => {
		e.preventDefault();
		console.log("http://localhost:4000/deletelocation/" + this.state.hotelID);
		fetch("http://localhost:4000/deletelocation/" + this.state.hotelID, {
			method: "GET",

			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseLocationDeleted: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// add inventory
	requestInventoryInfo = e => {
		e.preventDefault();
		const inventoryBody = {
			vacancy: this.state.vacancy,
			typeOfRoom: this.state.typeOfRoom,
			price: this.state.price
		};
		fetch("http://localhost:4000/addinventory", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(inventoryBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseInventorySuccess: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// update inventory
	requestInventoryUpdate = e => {
		e.preventDefault();
		const inventoryBody = {
			vacancy: this.state.vacancy,
			typeOfRoom: this.state.typeOfRoom,
			price: this.state.price
		};
		fetch("http://localhost:4000/updateinventory/" + this.state.vacancy, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(inventoryBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseInventoryUpdated: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// delete inventory
	requestInventoryDelete = e => {
		e.preventDefault();
		console.log("http://localhost:4000/deleteinventory/" + this.state.vacancy);
		fetch("http://localhost:4000/deleteinventory/" + this.state.vacancy, {
			method: "GET",

			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseInventoryDeleted: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Add Manager
	requestManInfo = e => {
		e.preventDefault();
		const managerBody = {
			machineName: this.state.machineName,
			firstName: this.state.firstName,
			hotelName: this.state.hotelName,
			hotelID: this.state.hotelID
		};
		fetch("http://localhost:4000/manager", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(managerBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ machineID: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Manager Update
	requestManUpdate = e => {
		e.preventDefault();
		const managerBody = {
			machineName: this.state.machineName,
			firstName: this.state.firstName,
			hotelName: this.state.hotelName,
			hotelID: this.state.hotelID
		};
		fetch("http://localhost:4000/updatemanager/" + this.state.machineName, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(managerBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseManUpdated: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Manager Deleted
	requestManDelete = e => {
		e.preventDefault();
		console.log(
			"http://localhost:4000/deletemanager/" + this.state.machineName
		);
		fetch("http://localhost:4000/deletemanager/" + this.state.machineName, {
			method: "GET",

			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseManDeleted: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Add Manager Account
	requestManAccountInfo = e => {
		e.preventDefault();
		const managerAccountBody = {
			machineName: this.state.machineName,
			address: this.state.address,
			city: this.state.city
		};
		fetch("http://localhost:4000/manageraccount", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(managerAccountBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ state: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Manager Account Update
	requestManAccountUpdate = e => {
		e.preventDefault();
		const managerAccountBody = {
			machineName: this.state.machineName,
			address: this.state.address,
			city: this.state.city
		};
		fetch(
			"http://localhost:4000/updatemanageraccount/" + this.state.machineName,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(managerAccountBody)
			}
		)
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseManAccountUpdated: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Manager Account Delete
	requestManAccountDelete = e => {
		e.preventDefault();
		console.log(
			"http://localhost:4000/deletemanageraccount/" + this.state.machineName
		);
		fetch(
			"http://localhost:4000/deletemanageraccount/" + this.state.machineName,
			{
				method: "GET",

				headers: {
					"Content-Type": "application/json"
				},
				body: undefined
			}
		)
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseManAccountDeleted: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Add Customer
	requestCustomerInfo = e => {
		e.preventDefault();
		const customerBody = {
			SSN: this.state.SSN,
			firstName: this.state.firstName,
			hotelName: this.state.hotelName
		};
		fetch("http://localhost:4000/customer", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(customerBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseCustomerSuccess: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Update Customer
	requestCustomerUpdate = e => {
		e.preventDefault();
		const customerBody = {
			SSN: this.state.SSN,
			firstName: this.state.firstName,
			hotelName: this.state.hotelName
		};
		fetch("http://localhost:4000/updatecustomer/" + this.state.SSN, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(customerBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseCustomerUpdated: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Delete Customer
	requestCustomerDelete = e => {
		e.preventDefault();
		console.log("http://localhost:4000/deletecustomer/" + this.state.SSN);
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
				this.setState({ responseCustomerDeleted: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Add Customer Account
	requestCustomerAccountInfo = e => {
		e.preventDefault();
		const customerAccountBody = {
			SSN: this.state.SSN,
			address: this.state.address,
			city: this.state.city,
			price: this.state.price,
			starRating: this.state.starRating
		};
		fetch("http://localhost:4000/customeraccount", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(customerAccountBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseCustomerAccountSuccess: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Update Customer Account
	requestCustomerAccountUpdate = e => {
		e.preventDefault();
		const customerAccountBody = {
			SSN: this.state.SSN,
			address: this.state.address,
			city: this.state.city,
			price: this.state.price,
			starRating: this.state.starRating
		};
		fetch("http://localhost:4000/updatecustomeraccount/" + this.state.SSN, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(customerAccountBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseCustomerAccountUpdated: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Delete Customer Account
	requestCustomerAccountDelete = e => {
		e.preventDefault();
		console.log(
			"http://localhost:4000/deletecustomeraccount/" + this.state.SSN
		);
		fetch("http://localhost:4000/deletecustomeraccount/" + this.state.SSN, {
			method: "GET",

			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseCustomerAccountDeleted: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};
	// Add Merchandise
	requestMerchandiseInfo = e => {
		e.preventDefault();
		const merchandiseBody = {
			currentStatus: this.state.currentStatus,
			reservationID: this.state.reservationID,
			dateIn: this.state.dateIn,
			dateOut: this.state.dateOut,
			madeBy: this.state.madeBy
		};
		fetch("http://localhost:4000/merchandise", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(merchandiseBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseMerchSuccess: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Update Merchandise
	requestMerchandiseUpdate = e => {
		e.preventDefault();
		const merchandiseBody = {
			currentStatus: this.state.currentStatus,
			reservationID: this.state.reservationID,
			dateIn: this.state.dateIn,
			dateOut: this.state.dateOut,
			madeBy: this.state.madeBy
		};
		fetch(
			"http://localhost:4000/updatemerchandise/" + this.state.currentStatus,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(merchandiseBody)
			}
		)
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseMerchUpdated: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Delete Merchandise
	requestMerchandiseDelete = e => {
		e.preventDefault();
		console.log(
			"http://localhost:4000/deletemerchandise/" + this.state.currentStatus
		);
		fetch(
			"http://localhost:4000/deletemerchandise/" + this.state.currentStatus,
			{
				method: "GET",

				headers: {
					"Content-Type": "application/json"
				},
				body: undefined
			}
		)
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseMerchDeleted: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Add Room
	requestRoomInfo = e => {
		e.preventDefault();
		const RoomBody = {
			SSN: this.state.SSN,
			SSN: this.state.SSN,
			dayIn: this.state.dayIn,
			price: this.state.price,
			vacancy: this.state.vacancy
		};
		fetch("http://localhost:4000/Room", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(RoomBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ reponseRoomSuccess: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Update Room
	requestRoomUpdate = e => {
		e.preventDefault();
		const RoomBody = {
			SSN: this.state.SSN,
			SSN: this.state.SSN,
			dayIn: this.state.dayIn,
			price: this.state.price,
			vacancy: this.state.vacancy
		};
		fetch("http://localhost:4000/updateroom/" + this.state.SSN, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(RoomBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseRoomUpdate: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Cancel room
	requestRoomCancellation = e => {
		e.preventDefault();
		console.log("http://localhost:4000/cancelroom/" + this.state.SSN);
		fetch("http://localhost:4000/cancelroom/" + this.state.SSN, {
			method: "GET",

			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseRoomDelete: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Add Room
	requestRoom = e => {
		e.preventDefault();
		const roomObject = {
			Tat_no: this.state.Tat_no,
			SSN: this.state.SSN,
			Type: this.state.Type,
			roomNumber: this.state.roomNumber,
			SSN: this.state.SSN,
			hotelID: this.state.hotelID,
			vacancy: this.state.vacancy
		};
		fetch("http://localhost:4000/room", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(roomObject)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseHotelSuccess: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Update Room
	requestRoomUpdate = e => {
		e.preventDefault();
		const roomObject = {
			Tat_no: this.state.Tat_no,
			SSN: this.state.SSN,
			Type: this.state.Type,
			roomNumber: this.state.roomNumber,
			SSN: this.state.SSN,
			hotelID: this.state.hotelID,
			vacancy: this.state.vacancy
		};
		fetch("http://localhost:4000/updateroom/" + this.state.Tat_no, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(roomObject)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseHotelUpdated: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Delete Room
	requestHotelDelete = e => {
		e.preventDefault();
		console.log("http://localhost:4000/deletehotel" + this.state.Tat_no);
		fetch("http://localhost:4000/deletehotel" + this.state.Tat_no, {
			method: "GET",

			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseHotelDeleted: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Add Result
	requestResultInfo = e => {
		e.preventDefault();
		const resultBody = {
			firstName: this.state.firstName,
			hotelID: this.state.hotelID,
			SSN: this.state.SSN,
			hotelID: this.state.hotelID,
			lastName: this.state.lastName,
			middleInitial: this.state.middleInitial,
			SSN: this.state.SSN,
			employeeID: this.state.employeeID
		};
		fetch("http://localhost:4000/result", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(resultBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ sex: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Update Result
	requestResultUpdate = e => {
		e.preventDefault();
		const resultBody = {
			firstName: this.state.firstName,
			hotelID: this.state.hotelID,
			SSN: this.state.SSN,
			hotelID: this.state.hotelID,
			lastName: this.state.lastName,
			middleInitial: this.state.middleInitial,
			SSN: this.state.SSN,
			employeeID: this.state.employeeID
		};
		fetch("http://localhost:4000/updateresult/" + this.state.firstName, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(resultBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseResultUpdated: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Delete Result
	requestResultDelete = e => {
		e.preventDefault();
		console.log("http://localhost:4000/deleteresult/" + this.state.firstName);
		fetch("http://localhost:4000/deleteresult/" + this.state.firstName, {
			method: "GET",

			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseResultDeleted: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// add waiver policy
	requestWaiverPolicyInfo = e => {
		e.preventDefault();
		const waiver_policyBody = {
			menu: this.state.menu,
			price: this.state.price,
			roomNumber: this.state.roomNumber,
			SSN: this.state.SSN
		};
		fetch("http://localhost:4000/waiverpolicy", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(waiver_policyBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseWaiverPolicySuccess: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Update Waiver Policy
	requestWaiverPolicyUpdate = e => {
		e.preventDefault();
		const waiver_policyBody = {
			menu: this.state.menu,
			price: this.state.price,
			roomNumber: this.state.roomNumber,
			SSN: this.state.SSN
		};
		fetch("http://localhost:4000/updatewaiverpolicy/" + this.state.menu, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(waiver_policyBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseWaiverPolicyUpdated: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Delete Waiver Policy
	requestWaiverPolicyDelete = e => {
		e.preventDefault();
		console.log("http://localhost:4000/deletewaiverpolicy/" + this.state.menu);
		fetch("http://localhost:4000/deletewaiverpolicy/" + this.state.menu, {
			method: "GET",

			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseWaiverPolicyDeleted: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Add Cancellation Policy
	requestCancellationPolicyInfo = e => {
		e.preventDefault();
		const cancellation_policyBody = {
			menu: this.state.menu,
			price: this.state.price,
			roomNumber: this.state.roomNumber,
			SSN: this.state.SSN
		};
		fetch("http://localhost:4000/addcancellationpolicy", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(cancellation_policyBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseCancellationPolicySuccess: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Update Cancellation Policy
	requestCancellationPolicyUpdate = e => {
		e.preventDefault();
		const cancellation_policyBody = {
			menu: this.state.menu,
			price: this.state.price,
			roomNumber: this.state.roomNumber,
			SSN: this.state.SSN
		};
		fetch("http://localhost:4000/updatecancellationpolicy/" + this.state.menu, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(cancellation_policyBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseCancellationPolicyUpdated: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Delete Cancellation Policy
	requestCancellationPolicyDelete = e => {
		e.preventDefault();
		console.log(
			"http://localhost:4000/deletecancellationpolicy/" + this.state.menu
		);
		fetch("http://localhost:4000/deletecancellationpolicy/" + this.state.menu, {
			method: "GET",

			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseCancellationPolicyDeleted: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Add Shop Owner
	requestShopOwnerInfo = e => {
		e.preventDefault();
		const shop_ownerBody = {
			Own_id: this.state.Own_id,
			firstName: this.state.firstName,
			hotelName: this.state.hotelName,
			hotelID: this.state.hotelID
		};
		fetch("http://localhost:4000/addshopowner", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(shop_ownerBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseShopOwnerSuccess: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Update Shop Owner
	requestShopOwnerUpdate = e => {
		e.preventDefault();
		const shop_ownerBody = {
			Own_id: this.state.Own_id,
			firstName: this.state.firstName,
			hotelName: this.state.hotelName,
			hotelID: this.state.hotelID
		};
		fetch("http://localhost:4000/updateshopowner/" + this.state.Own_id, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(shop_ownerBody)
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseShopOwnerUpdated: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	// Delete Shop Owner
	requestShopOwnerDelete = e => {
		e.preventDefault();
		console.log("http://localhost:4000/deleteshopowner/" + this.state.Own_id);
		fetch("http://localhost:4000/deleteshopowner/" + this.state.Own_id, {
			method: "GET",

			headers: {
				"Content-Type": "application/json"
			},
			body: undefined
		})
			.then(response => response.json())
			.then(data => {
				console.log("RESPONSE: ", data);
				this.setState({ responseShopOwnerDeleted: data.success });
			})
			.catch(err => console.log("ERROR: ", err));
	};

	render() {
		return (
			<main>
				<section>
					<div className="page-header">
						<h2>Create Reservation </h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form onSubmit={this.requestInfo}>
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
										id="hotels"
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
									Create Reservation
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
