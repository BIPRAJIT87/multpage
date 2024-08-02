import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Paper, TextField, Button, Grid, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import './ExpenseTracker.css';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const addExpense = () => {
    const newExpense = {
      description,
      amount,
      category,
      date: new Date().toLocaleString(),
    };
    setExpenses([...expenses, newExpense]);
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <Paper elevation={3} className="expense-tracker">
      <Typography variant="h5" gutterBottom>Expenses</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Amount"
            variant="outlined"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Category"
            variant="outlined"
            fullWidth
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={addExpense}>
            Add Expense
          </Button>
        </Grid>
      </Grid>
      <Divider style={{ margin: '20px 0' }} />
      <List>
        {expenses.map((expense, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${expense.description} - ${expense.amount}`}
              secondary={`${expense.category} - ${expense.date}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ExpenseTracker;