import React from 'react'
import { latestTransactions } from '../constants/dummyData';
import UserImage from './UserImage';

const WidgetLg = () => {
    return (
        <div className="largeWidget w-full border border-slate-200 rounded-xl p-2 md:p-6 text-sm   ">
            <p className=' font-semibold'>Latest Transaction</p>
            <table  className=' table table-auto'>
                <tr className=''>
                    <th className='p-4'>
                        Customer
                    </th>
                    <th className='p-4'>
                        Date
                    </th>
                    <th className='p-4'>
                        Amount
                    </th>
                    <th className='p-4'>
                        Status
                    </th>
                </tr>

                {
                    latestTransactions.map((transaction, index) => (
                        <tr className=' rounded-xl w-full my-4 shadow-md' >
                            <td className='p-2'><div className="user flex items-center gap-4">
                                <UserImage UserImage={transaction.userImage} />
                                <p>{transaction.username}</p>
                            </div>
                            </td>
                            <td className='p-4'>
                                {transaction.date}
                            </td>
                            <td className='p-4'>
                                {transaction.amount}
                            </td>
                            {
                                
                            }
                            <td >
                                <button className=   {transaction.status === "Approved"?" bg-green-300 rounded-lg text-green-700 text-center p-4":" bg-red-400 rounded-lg text-red-700 text-center p-4" }>
                                {
                                    transaction.status
                                }
                                </button>
                              
                            </td>
                        </tr>
                    ))
                }

            </table>
        </div>
    )
}

export default WidgetLg
