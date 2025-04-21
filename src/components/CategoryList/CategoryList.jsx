

const CategoryList = ({ onSelectCategory }) => {
    const categories = ['Smartphone', 'Laptop', 'Tablet', 'Action Camera', 'Smart Speaker', 'Drone'];
    // const [categories, setCategories] = useState([]);
    // useEffect(() => {
    //     fetch('gadgetsData.json')
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // }, []);
    return (
        <div>
            <h2>SideNav</h2>
            <div className='flex flex-col space-y-2'>
                {
                    categories.map(category => <button
                        key={category}
                        className='btn rounded-xl'
                        onClick={() => onSelectCategory(category)}
                    >{category}</button>)
                }
            </div>
        </div>
    );
};

export default CategoryList;