import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
// material icons
import DateRange from "@material-ui/icons/DateRange";
//card components
import GridItem from '../Grid/GridItem';
import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader';
import CardIcon from '../Card/CardIcon';
import CardBody from '../Card/CardBody';
import CardCarousel from '../Card/CardCarousel';
import CardFooter from '../Card/CardFooter';
import styles from '../../useStyles/dashboardStyle';

const useStyles = makeStyles(styles);

const CategoryCard = (props) => {
  const classes = useStyles();
  const { category, iconOptions, colorOptions } = props;
  console.log('category:', category);
  const {
    id,
    name,
    budget_total,
    // current_total --- sum of all expenses; does not need to persist in the DB
    color,
    icon,
    createdAt,
    lastUpdated,
  } = category;

  return (
    <GridItem xs={12} sm={6} md={4}>
      <Link to={`/expenses/${id}`} style={{textDecoration: 'none'}}>
        <Card>
          <CardHeader color={colorOptions[color]} stats icon>
            <CardIcon color={colorOptions[color]}>
              {iconOptions[icon]}
            </CardIcon>
            <p className={classes.cardCategory}>{name}</p>
            <h3 className={classes.cardTitle}>{`$${current_total} spent`}</h3>
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>{`$${budget_total} BUDGET`}</h4>
            {/* <p className={classes.cardCategory}>
              <span className={textColor[color]}>
                <ArrowUpward className={classes.upArrowCardCategory} /> 65%
              </span>{" "}
              increase in spending today.
            </p> */}
            <CardCarousel color={colorOptions[color]} />
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <DateRange />
              Last 24 Hours
            </div>
          </CardFooter>
        </Card>
      </Link>
    </GridItem>
  );
}

export default CategoryCard;
