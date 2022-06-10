import React, { useContext, useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import Header from '../Homepage/Header/Header';
import { UserContext } from '../../context/user';
import './transacs.css'

interface IRequest {
  _id: string,
  userId: string,
  firstName: string,
  lastName: string,
  balance: number,
  dateCreate: string
}

export const Transactions = () => {
  const { usuario } = useContext(UserContext)
  const [transactions, setTransactions] = useState<Array<IRequest>>([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/transaction/userid/${usuario._id}`)
      .then((response) => {
        setTransactions(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <>
      <Header home={false} />
      <Container maxWidth="md" >
        <Box sx={{
          width: "100%",
          height: 890,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Box
            sx={{
              margin: 'auto',
              width: 900,
              height: 600,
              backgroundColor: '#e9e9e9',
              borderRadius: 5,
            }}
          >
            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last name</th>
                  <th>Balance</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {transactions?.map((transaction) => {
                  return (
                    <tr>
                      <td>{transaction.userId}</td>
                      <td>{transaction.firstName}</td>
                      <td>{transaction.lastName}</td>
                      <td>{transaction.balance}</td>
                      <td>{transaction.dateCreate}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Transactions;