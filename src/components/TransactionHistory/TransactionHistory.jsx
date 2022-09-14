import PropTypes from 'prop-types';
import {
  TranscriptionHeader,
  TransactionHistory,
  TransactionInit,
  TransactionTableRow,
  TransactionTableData,
  TransactionTableHeader,
} from './TransactionHistory.styled';

export const TransactionHistoryTable = ({ items }) => {
  return (
    <TransactionHistory>
      <TranscriptionHeader>
        <TransactionTableRow>
          <TransactionTableHeader>Type</TransactionTableHeader>
          <TransactionTableHeader>Amount</TransactionTableHeader>
          <TransactionTableHeader>Currency</TransactionTableHeader>
        </TransactionTableRow>
      </TranscriptionHeader>
      {items.map(item => (
        <TransactionInit key={item.id}>
          <TransactionTableRow>
            <TransactionTableData>{item.type}</TransactionTableData>
            <TransactionTableData>{item.amount}</TransactionTableData>
            <TransactionTableData>{item.currency}</TransactionTableData>
          </TransactionTableRow>
        </TransactionInit>
      ))}
    </TransactionHistory>
  );
};
TransactionHistoryTable.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
