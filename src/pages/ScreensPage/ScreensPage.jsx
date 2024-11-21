import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard.jsx';
import MainDashboard from '../../components/MainDashboard/MainDashboard.jsx';

import s from './ScreensPage.module.css';
import {
  addBoard,
  deleteBoard,
  fetchBoard,
  updateBoard,
} from '../../redux/board/boardOperations';
import {
  addColumn,
  deleteColumn,
  updateColumn,
} from '../../redux/columns/columnsOperations.js';
import {
  addTask,
  deleteTask,
  updateTask,
} from '../../redux/tasks/tasksOperations.js';
import { selectBoard } from '../../redux/board/boardSelectors.js';

const ScreensPage = () => {
  const dispatch = useDispatch();

  const { boardId } = useParams();

  // //? fetch board
  useEffect(() => {
    dispatch(fetchBoard({ id: boardId }));
  }, [dispatch, boardId]);

  // ? add board
  // useEffect(() => {
  //   dispatch(
  //     addBoard({
  //       title: 'BOARD 10000000000000',
  //       backgroundImage: 'bgImage_7',
  //       icon: 'icon_4',
  //     })
  //   );
  // }, [dispatch]);

  // ?delete board;
  // useEffect(() => {
  //   dispatch(deleteBoard('673cb6344262e63750c77bfc'));
  // }, [dispatch]);

  // ?update board
  // useEffect(() => {
  //   dispatch(
  //     updateBoard({ title: 'board', id: '673b643604a6f8a2e4f1282f' })
  //   );
  // }, [dispatch]);

  //? add column
  // useEffect(() => {
  //   dispatch(
  //     addColumn({
  //       title: 'sobaku',
  //       boardId: '673dfdae67e6bca8c6472d93',
  //     })
  //   );
  // }, [dispatch, boardId]);

  // ?delete column
  // useEffect(() => {
  //   dispatch(deleteColumn('673c7df5c8e82b228a273e1a'));
  // }, [dispatch]);

  //?update column
  // useEffect(() => {
  //   dispatch(updateColumn({ title: 'DONE', id: '673c65575fcb8abd18ff76a0' }));
  // }, [dispatch]);

  //? add task
  // useEffect(() => {
  //   dispatch(
  //     addTask({
  //       title: 'Update homepage styles',
  //       description: 'Modify the current homepage layout.',
  //       priority: 'Medium',
  //       deadline: '2024-11-21T00:00:00Z',
  //       columnId: '673de8c9eac731198c966a6f',
  //       boardId: '673dbfbfeac731198c9663d5',
  //     })
  //   );
  // }, [dispatch]);

  // const task = {
  //   title: 'task 3 DONE',
  //   description: 'task 3 DONE',
  //   priority: 'Low',
  //   columnId: '673c65575fcb8abd18ff76a0',
  //   boardId: '673c65105fcb8abd18ff7690',
  //   deadline: '2024-11-25T15:30:00Z',
  // };

  // ?delete task
  // useEffect(() => {
  //   dispatch(
  //     deleteTask({
  //       id: '673c964602fc7a56cbbb9047',
  //       columnId: '673c65575fcb8abd18ff76a0',
  //     })
  //   );
  // }, [dispatch]);

  // ?update task
  // useEffect(() => {
  //   dispatch(updateTask({ task, id: '673c9bb430171396ad3a35b7' }));
  // }, [dispatch]);

  // const task = {
  //   title: 'DONE',
  //   description: 'DONE',
  //   columnId: '673c654e5fcb8abd18ff7699',
  // };

  return (
    <div className={s.container}>
      <HeaderDashboard />
      <MainDashboard />
    </div>
  );
};

export default ScreensPage;
