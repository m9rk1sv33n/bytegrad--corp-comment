type HashtagItemProps = {
  onSelectCompany: (company: string) => void;
  company: string;
};

export default function HashtagItem({
  onSelectCompany,
  company,
}: HashtagItemProps) {
  return (
    <div>
      <li key={company}>
        <button onClick={() => onSelectCompany(company)}>#{company}</button>
      </li>
    </div>
  );
}
