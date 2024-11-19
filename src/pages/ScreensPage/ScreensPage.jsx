import { useDispatch } from 'react-redux';
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

const ScreensPage = () => {
  const dispatch = useDispatch();

  const { boardId } = useParams();

  // //? fetch board
  useEffect(() => {
    dispatch(fetchBoard({ id: '673c65105fcb8abd18ff7690' }));
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
  //       title: 'DONE',
  //       boardId: '673c65105fcb8abd18ff7690',
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
  //   dispatch(addTask(task));
  // }, [dispatch]);

  // const task = {
  //   title: 'task 3 DONE',
  //   description: 'task 3 DONE',
  //   priority: 'Medium',
  //   columnId: '673c65575fcb8abd18ff76a0',
  //   boardId: '673c65105fcb8abd18ff7690',
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
      <HeaderDashboard title={boardId} />
      <MainDashboard />
    </div>
  );
};

export default ScreensPage;
