import React, { useState } from 'react';
import Button from '../input/Button';
import UsersList from './Users/ListUser';
import DeleteUser from './Users/DeleteUser';
import CarouselCreate from './Carousel/CarouselCreate';
import CarouselEdit from './Carousel/CarouselEdit';
import AddActivity from './Activity/AddActivity';
import ActivitiesList from './Activity/ActivitiesList';
import Room from './Room/Room';
import styles from '../../assets/scss/components/admin/Dashboard.module.scss';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('users');
  const [subComponent, setSubComponent] = useState(null);

  const switchTab = (tabName) => {
    setActiveTab(tabName);
    setSubComponent(null);
  };

  const switchSubComponent = (componentName) => {
    setSubComponent(componentName);
  };

  return (
    <div className={styles.dashboardcontainer}>
      <nav className={styles.sidebar}>
        <div className={styles.sidebarheader}>
          <h2>Tableau de bord</h2>
        </div>
        <div className={styles.sidebarbuttons}>
          <Button content="Utilisateur" onClick={() => switchTab('users')} />
          <Button content="Carrousel" onClick={() => switchTab('carouselImages')} />
          <Button content="Activités" onClick={() => switchTab('activitiesList')} />
          <Button content="Chambres" onClick={() => switchTab('room')} />
        </div>
      </nav>
      <main className={styles.maincontent}>
        {activeTab === 'users' && (
          <>
            <div className={styles.button}>
              <Button content="Liste des utilisateurs" onClick={() => switchSubComponent('UsersList')} />
              <Button content="Supprimer un utilisateur" onClick={() => switchSubComponent('DeleteUser')} />
            </div>
            {subComponent === 'UsersList' && <UsersList />}
            {subComponent === 'DeleteUser' && <DeleteUser />}
          </>
        )}
        {activeTab === 'carouselImages' && (
          <>
            <div className={styles.button}>
              <Button content="Carrousel avec images" onClick={() => switchSubComponent('CarouselCreate')} />
              <Button content="Modifier et supprimer des images" onClick={() => switchSubComponent('CarouselEdit')} />
            </div>
            {subComponent === 'CarouselCreate' && <CarouselCreate />}
            {subComponent === 'CarouselEdit' && <CarouselEdit />}
          </>
        )}
        {activeTab === 'activitiesList' && (
          <>
            <div className={styles.button}>
              <Button content="Ajouter une activité" onClick={() => switchSubComponent('AddActivity')} />
              <Button content="Liste des activités" onClick={() => switchSubComponent('ActivitiesList')} />
            </div>            
            {subComponent === 'AddActivity' && <AddActivity />}
            {subComponent === 'ActivitiesList' && <ActivitiesList />}
          </>
        )}
        {activeTab === 'room' && (
          <>
            <Room />
          </>
        )}
      </main>
    </div>
  );
}

export default Dashboard;