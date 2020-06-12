// @flow
import * as React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

class SweetAlert{

    static displayAccessDeniedAlert()
    {
        let options = {
            title: 'توجه',
            message: 'شما دسترسی کافی برای انجام این کار ندارید',
            childrenElement: () => <div />,
            customUI: ({ title, message, onClose }) => {
                return (
                    <div className='sweetalert'>
                        <h1>{title}</h1>
                        <p>{message}</p>
                        <button className='cancelbutton' onClick={onClose}>بستن</button>
                    </div>
                )
            },
            willUnmount: () => {}
        };
        confirmAlert(options);
    }
    static displaySimpleAlert(Title,Text)
    {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
        title:<h1>{Title}</h1>,
            html: <p dangerouslySetInnerHTML={{__html:Text}}></p>,
            confirmButtonText:'OK',});
    }
    static displaySuccessAlert(Title,Text)
    {
        this._displayAlert(Title,Text,'success');
    }
    static displayWarningAlert(Title,Text)
    {
        this._displayAlert(Title,Text,'warning');
    }
    static displayErrorAlert(Title,Text)
    {
        this._displayAlert(Title,Text,'error');
    }
    static _displayAlert(Title,Text,icon)
    {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            icon: icon,
            title:<h1>{Title}</h1>,
            html: <p dangerouslySetInnerHTML={{__html:Text}}></p>,
            confirmButtonText:'OK',});
    }
    static displayDeleteAlert(OnConfirmHandler)
    {
        let options = {
            title: 'توجه',
            message: 'آیا مطمئن هستید که می خواهید این آیتم را حذف کنید؟',
            buttons: [
                {
                    label: 'بله',
                    onClick: OnConfirmHandler
                },
                {
                    label: 'خیر',
                    onClick: () => {},
                }
            ],

            childrenElement: () => <div />,
            customUI: ({ title, message, onClose }) => {
                return (
                    <div className='sweetalert'>
                        <h1>{title}</h1>
                        <p>{message}</p>
                        <button className='cancelbutton' onClick={onClose}>خیر</button>
                        <button className='deletedangerbutton' onClick={()=>{
                            OnConfirmHandler();
                            onClose();
                        }}>بله، حذف شود.</button>
                    </div>
                )
            },
            willUnmount: () => {}
        };
        confirmAlert(options);
    }
}

export default SweetAlert;
