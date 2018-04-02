import {alert as reducer} from './alert.reducer';
import { alertConstants } from '../constants';


describe('alert reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({});
	});
 
	it('should handle SUCCESS', () => {
		const message = 'hello world';
		expect(
			reducer({},{
				type:alertConstants.SUCCESS,
				message:message
			})
		).toEqual(
			{
				type: 'alert-success',
				message: message
			}
		);
	});
	it('should handle ERROR', () => {
		const message = 'hello world';
		expect(
			reducer({},{
				type:alertConstants.ERROR,
				message:message
			})
		).toEqual(
			{
				type: 'alert-danger',
				message: message
			}
		);
	});
	it('should handle CLEAR', () => {
		expect(
			reducer({},{
				type:alertConstants.CLEAR
			})
		).toEqual({});
	});
});