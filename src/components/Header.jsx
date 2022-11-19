import Title from "./Title";
import Button from "./Button";

const Header = ({onToggle, showAddTask}) => {

    return(
        <header className="header">
         <Title title="My-Reminder" />
         <Button color={showAddTask ? 'red' : 'green'} showAddTask={showAddTask} onToggle={onToggle} />
        </header>
    )
}

export default Header;