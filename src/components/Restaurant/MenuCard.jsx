import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const MenuCard = () => {
  const demo = [
    {
      category: "Nuts & seeds",
      ingredients: ["Cashews"],
    },
    {
      category: "Protein",
      ingredients: ["Protein", "Bacon strips"],
    },
  ];

  const handleCheckboxChange = (value) => {
    console.log(value);
    
  }

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src="https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_1280.jpg"
              alt=""
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">burger</p>
              <p>499 pln</p>
              <p className="text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                aut ullam saepe earum possimus, ut hic placeat iusto
                consequuntur veniam recusandae quia? Temporibus, hic at.
              </p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className="flex gap-5 flex-wrap">
            {demo.map((item) => (
              <div>
                <p>{item.category}</p>
                <FormGroup>
                  {item.ingredients.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      control={<Checkbox onChange={()=>handleCheckboxChange(item)} />}
                      label={item}
                    />
                  ))}
                </FormGroup>
              </div>
            ))}
          </div>
          <div className="pt-5">
            <Button
            type="submit"
            variant="contained"
            disabled={false}
            >{true ? "Add to Cart" : "Out Of Stock"}</Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
