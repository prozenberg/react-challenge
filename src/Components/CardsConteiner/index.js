import React, { useEffect, useState } from 'react';
import Cards from '../Cards';
import Input from '../Input';
import Sort from '../Sort';
import './index.scss'




const CardsConteiner = () => {
    const [users, setUsers] = useState([]);
    const [searchedUsers, setSearchedUsers] = useState([]);
    const [sorted, setSorted] = useState(false);
    const [search, setSearch] = useState("");
    const [changes, setChanges] = useState(false);

    const apiLink = 'https://randomuser.me/api/?results=10';
    const fetchData = async function() {
        const response = await fetch(apiLink);
        const data = await response.json();
        const result = await data.results;
        setUsers([...result]);
    }

    const handleSearch = (search) => setSearchedUsers(users.filter((e) => e.name.last.toLowerCase().includes(search)));
    const updateSearch = (e) => setSearch(e)
    const updateSort = (e) => {search.length === 0 ? setUsers(e) : setSearchedUsers(e);}
    const updateEdit = (e) => setChanges(e);
    const updateCondition = (e) => setSorted(e)

    useEffect(() => {
        handleSearch(search)
    }, [search]);

    useEffect(() => {
        fetchData();
    }, []);
    return (<>
    <div className="cardsConteiner">
        <div className='CardsFilters'>
        <Input  updateParent={updateSearch}/>
        <Sort updateParent={updateSort} data={search.length === 0 ? users : searchedUsers} condition={sorted} conditionF={updateCondition}/>
        </div>

        <div className="cardsGallery">
            {search.length === 0 ?
                users.map((data) => (
                    <Cards props={data} fn={updateSort} users={users} sUsers={searchedUsers} changesA={changes} changesFn={updateEdit}/>
                )) :
                searchedUsers.length > 0 ?
                    searchedUsers.map((data) => (
                        <Cards props={data} fn={updateSort} users={users} sUsers={searchedUsers} changesA={changes} changesFn={updateEdit}/>
                    )) :
                    <p className='noResults'>{`No results... :'(`}</p>
            }
        </div>

    </div>

    </>
    )
};

export default CardsConteiner;
