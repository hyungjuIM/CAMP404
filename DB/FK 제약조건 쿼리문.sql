ALTER TABLE ELEARNING.MY_LECTURE ADD CONSTRAINT FK_PAYMENT FOREIGN KEY (PAY_NO) REFERENCES ELEARNING.PAYMENT(PAY_NO) ON DELETE CASCADE;
ALTER TABLE ELEARNING.MY_LECTURE ADD CONSTRAINT FK_USER2 FOREIGN KEY (USER_NO) REFERENCES ELEARNING."USER"(USER_NO) ON DELETE CASCADE;
ALTER TABLE ELEARNING.MY_LECTURE ADD CONSTRAINT FK_LECTURE2 FOREIGN KEY (LECTURE_NO) REFERENCES ELEARNING.LECTURE(LECTURE_NO) ON DELETE CASCADE;


ALTER TABLE ELEARNING.FAV_LEC ADD CONSTRAINT FK_LECTURE FOREIGN KEY (LECTURE_NO) REFERENCES ELEARNING.LECTURE(LECTURE_NO) ON DELETE CASCADE;
ALTER TABLE ELEARNING.FAV_LEC ADD CONSTRAINT FK_USER FOREIGN KEY (USER_NO) REFERENCES ELEARNING."USER"(USER_NO) ON DELETE CASCADE;


ALTER TABLE ELEARNING.LECTURE ADD CONSTRAINT FK_CATEGORY FOREIGN KEY (CATEGORY_NO) REFERENCES ELEARNING.CATEGORY(CATEGORY_NO) ON DELETE CASCADE;
ALTER TABLE ELEARNING.LECTURE ADD CONSTRAINT FK_TEACHER FOREIGN KEY (TEACHER_NO) REFERENCES ELEARNING.TEACHER(TEACHER_NO) ON DELETE CASCADE;


ALTER TABLE ELEARNING.PAYMENT ADD CONSTRAINT FK_USER3 FOREIGN KEY (USER_NO) REFERENCES ELEARNING."USER"(USER_NO) ON DELETE CASCADE;
ALTER TABLE ELEARNING.PAYMENT ADD CONSTRAINT FK_LECTURE3 FOREIGN KEY (LECTURE_NO) REFERENCES ELEARNING.LECTURE(LECTURE_NO) ON DELETE CASCADE;


ALTER TABLE ELEARNING.NOTICE ADD CONSTRAINT FK_MANAGER FOREIGN KEY (MGR_NO) REFERENCES ELEARNING.MANAGER(MGR_NO) ON DELETE CASCADE;
