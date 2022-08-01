import styled from "./Header.module.css";
import { GoSearch } from "react-icons/go";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Header = ({
  BurguerKenzie,
  burguersList,
  setFilteredBurguersList,
  normalize,
  searchInput,
  setSearchInput,
}) => {
  useEffect(() => {
    const filteredSearch = burguersList.filter((burguer) => {
      return (
        normalize(burguer.name).includes(normalize(searchInput)) ||
        normalize(burguer.category).includes(normalize(searchInput))
      );
    });
    setFilteredBurguersList(filteredSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput, burguersList, setFilteredBurguersList]);

  return (
    <header className={styled.header}>
      <div className={styled.container}>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src={BurguerKenzie} alt="Burguer Kenzie" />
        </motion.div>
        <motion.form
          action="#"
          className={styled.searchForm}
          onSubmit={(e) => e.preventDefault()}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <input
            type="text"
            value={searchInput}
            placeholder="Digitar pesquisa"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit">
            <GoSearch className={styled.GoSearchColor} />
          </button>
        </motion.form>
      </div>
    </header>
  );
};

export default Header;
