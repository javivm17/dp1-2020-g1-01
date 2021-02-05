import axios from 'axios';
import {Component} from 'react';
import AuthenticationService from '../service/AuthenticationService';

export default class AssignmentComponent extends Component{
		
	
	getListOfAssignment(baseUrl, user){
		return axios.get(baseUrl + "/asignaciones/" + user, { headers: { authorization: AuthenticationService.createBasicAuthToken(sessionStorage.getItem("authenticatedUser"), 
		sessionStorage.getItem("password")) } }).then(res => res.data);
    }
    
    getListOfEmptyAssignmentGroup(baseUrl){
        return axios.get(baseUrl + "/asignaciones/freeAssignments", { headers: { authorization: AuthenticationService.createBasicAuthToken(sessionStorage.getItem("authenticatedUser"), 
		sessionStorage.getItem("password")) } }).then(res => res.data);
    }

}
