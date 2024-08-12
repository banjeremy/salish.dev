import employmentHistory from '../data/employment-history';
import EmploymentHistoryItem from './EmploymentHistoryItem';

const EmploymentHistory = (props: any) => {
  return (
    <ol {...props}>
      {employmentHistory.map((position) => (
        <EmploymentHistoryItem key={position.company} position={position} />
      ))}
    </ol>
  );
};

export default EmploymentHistory;
