import React from 'react';
import { bugs, website, server } from '../../mockData/tabs';
import { addExpenseCat } from '../../redux/actions';

//charts plugin for react
import ChartistGraph from 'react-chartist';
// import @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
// import @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import AirplanemodeActiveRoundedIcon from '@material-ui/icons/AirplanemodeActiveRounded';
import AttachFileRoundedIcon from '@material-ui/icons/AttachFileRounded';
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
// main components
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardIcon from '../../components/Card/CardIcon';
import CardFooter from '../../components/Card/CardFooter';
import CardBody from '../../components/Card/CardBody';
import Danger from '../../components/Typography/Danger';
import CustomTabs from '../../components/CustomTabs/CustomTabs';
import Tasks from '../../components/Tasks/Tasks';
// import Warning from '../../components/Typography/Warning';
import NewCategoryModal from '../../containers/Dashboard/NewCategoryModal';

import styles from '../../assets/jss/dashboard/views/dashboardStyle.js';

import mockExpenses from '../../mockData/expenses';
import ExpenseCard from '../../containers/Dashboard/ExpenseCard';

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
  financialProgress,
} from '../../mockData/chart';

const iconOptions = {
  a: <HomeRoundedIcon />,
  b: <FavoriteRoundedIcon />,
  c: <AcUnitRoundedIcon />,
  d: <AirplanemodeActiveRoundedIcon />,
  e: <AttachFileRoundedIcon />,
  f: <FastfoodRoundedIcon />,
  g: <ShoppingCartRoundedIcon />,
};

const useStyles = makeStyles(styles);

const Dashboard = (props) => {
  const { openModal, expenseCategories } = props;
  const classes = useStyles();
  mockExpenses.forEach(exp => {
    addExpenseCat(exp);
  });

  return (
    <>
      <GridContainer>
        <GridItem style={{display: "flex", alignItems: "center"}}>
          <IconButton color="primary" onClick={openModal} aria-label="add category">
            <LibraryAddIcon fontSize="large" />
          </IconButton>
          <h1>Add category</h1>
          <NewCategoryModal iconOptions={iconOptions} />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Used Space</p>
              <h3 className={classes.cardTitle}>
                49/50 <small>Gkee</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Get more space
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        {expenseCategories.map((exp) => (
          <ExpenseCard key={exp.id} expense={exp} iconOptions={iconOptions} />
        ))}
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={financialProgress.data}
                type="Bar"
                options={financialProgress.options}
                listener={financialProgress.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 65%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Bugs",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                )
              },
              {
                tabName: "Website",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                )
              },
              {
                tabName: "Server",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                )
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </>
  );
}

export default Dashboard;
