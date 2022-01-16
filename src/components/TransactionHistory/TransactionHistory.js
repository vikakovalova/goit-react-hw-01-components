import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.title}>
          <th className={s.header}>Type</th>
          <th className={s.header}>Amount</th>
          <th className={s.header}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.body}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={s.columnType}>{type}</td>
            <td className={s.column}>{amount}</td>
            <td className={s.column}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionHistory;
